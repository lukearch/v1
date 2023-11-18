import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  SkipSelf,
  forwardRef,
  signal
} from "@angular/core";
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from "@angular/forms";
import { v4 } from "uuid";

export type Option<T = string> = {
  display: string;
  value: T;
  icon?: string;
};

export type Options<T = string> = Option<T>[];

@Component({
  selector: "app-dropdown-selector",
  templateUrl: "./dropdown-selector.component.html",
  styleUrls: ["./dropdown-selector.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropdownSelectorComponent)
    }
  ]
})
export class DropdownSelectorComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() options: Option<unknown>[] = [];
  @Input() formControlName = "";
  @Input() id = v4();
  @Input() label = "";
  @Input() value = "";
  @Input() placeholder = "Select an option";
  @Input() disabled = false;
  @Input() filter = false;
  @Input() editable = false;
  @Input() virtualScroll = false;
  @Input() required = false;
  @Input() virtualScrollItemSize?: number;
  selectedItem = signal<Option | null>(null);

  @HostBinding("style.opacity")
  get opacity() {
    return this.input?.disabled ? 0.25 : 1;
  }

  get input() {
    return this.controlContainer.control?.get(this.formControlName);
  }

  onChange?: () => void;
  onTouch?: () => void;

  control: FormGroup = new FormGroup({});

  constructor(
    @Optional() @SkipSelf() public controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    const control = this.controlContainer.control;
    if (!control) return;
    this.control = control as FormGroup;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["required"]) {
      if (this.required) {
        this.control.addValidators(Validators.required);
      }
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
