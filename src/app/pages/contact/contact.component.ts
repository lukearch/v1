import { Component, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Options } from "src/app/components/dropdown-selector/dropdown-selector.component";
import { PhoneMask } from "src/app/enums/phone-masks.enum";
import { ContactService } from "src/app/services/contact.service";

export type ContactFormInputs = {
  name?: string;
  company?: string | null;
  phone?: string;
  email?: string;
  projectType?: string;
  deadline?: string;
  message?: string;
};

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  timeout?: ReturnType<typeof setTimeout>;

  message = signal<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  countries: Options = [
    {
      display: "+1",
      value: "CA",
      icon: "fi fi-ca"
    },
    {
      display: "+1",
      value: "USA",
      icon: "fi fi-us"
    },
    {
      display: "+55",
      value: "BR",
      icon: "fi fi-br"
    },
    {
      display: "+351",
      value: "PT",
      icon: "fi fi-pt"
    }
  ];

  projectTypes: Options = [
    {
      display: "E-commerce",
      value: "e-commerce"
    },
    {
      display: "Personal site",
      value: "portfolio"
    },
    {
      display: "Institutional website",
      value: "institutional"
    },
    {
      display: "Company Landing Page",
      value: "CLP"
    },
    {
      display: "Product Landing Page",
      value: "PLP"
    },
    {
      display: "Other",
      value: "other"
    }
  ];

  deadlines: Options = [
    {
      display: "Up to 3 months",
      value: "~ 3M"
    },
    {
      display: "Up to 6 months",
      value: "~ 6M"
    },
    {
      display: "Up to 1 year",
      value: "~ 1Y"
    },
    {
      display: "Undefined",
      value: "undefined"
    }
  ];

  contact = new FormGroup({
    name: new FormControl("", {
      nonNullable: true
    }),
    company: new FormControl(""),
    ddi: new FormControl<"BR" | "CA" | "USA" | "PT">("BR", {
      nonNullable: true
    }),
    phone: new FormControl("", {
      nonNullable: true
    }),
    email: new FormControl("", {
      nonNullable: true
    }),
    projectType: new FormControl("", {
      nonNullable: true
    }),
    deadline: new FormControl("", {
      nonNullable: true
    }),
    message: new FormControl("", {
      nonNullable: true
    })
  });

  get projectType() {
    return this.contact.controls.projectType.value;
  }

  constructor(private contactService: ContactService) {}

  submit() {
    if (this.timeout) {
      return this.message.set({
        type: "error",
        text: "You need to wait 10 minutes before sending another message"
      });
    }

    const $ = this.contactService.send(this.contact.value).subscribe({
      next: () => {
        this.message.set({
          type: "success",
          text: "Your contact request has been sent successfully!"
        });

        this.timeout = setTimeout(
          () => {
            this.timeout = undefined;
          },
          1000 * 60 * 10
        );

        $.unsubscribe();
      },
      error: () => {
        this.message.set({
          type: "error",
          text: "Your message was not sent, please try again later"
        });

        $.unsubscribe();
      }
    });
  }

  get mask() {
    return PhoneMask[this.contact.controls.ddi.value];
  }
}
