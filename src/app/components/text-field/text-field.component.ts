import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  SkipSelf,
  forwardRef
} from "@angular/core";
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from "@angular/forms";
import { v4 } from "uuid";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextFieldComponent)
    }
  ]
})
export class TextFieldComponent
  implements OnInit, ControlValueAccessor, OnChanges
{
  @Input() type = "";
  @Input() mask = "";
  @Input() formControlName = "";
  @Input() label = "";
  @Input() placeholder = "";
  @Input() autocomplete = "";
  @Input() required = false;
  value = "";
  onChange?: () => void;
  onTouch?: () => void;
  id = v4();

  formGroup = new FormGroup({});

  @HostBinding("style.opacity")
  get opacity() {
    return this.control?.disabled ? 0.5 : 1;
  }

  get control() {
    return this.controlContainer?.control?.get(this.formControlName);
  }

  constructor(
    @Optional() @SkipSelf() private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    const control = this.controlContainer?.control as FormGroup;
    if (!control) return;
    this.formGroup = control;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["mask"]) {
      Object.assign(this.control as object, {
        pristine: false
      });
    }

    if (changes["type"]) {
      if (this.type === "email") {
        this.control?.addValidators(Validators.email);
      }
    }

    if (changes["required"]) {
      if (this.required) {
        this.control?.addValidators(Validators.required);
      }
    }
  }

  writeValue(value: string): void {
    this.value = value ? value : "";
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
