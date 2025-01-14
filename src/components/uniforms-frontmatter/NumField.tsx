import * as React from 'react';
import { Ref } from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import { LabelField } from './LabelField';

export type NumFieldProps = HTMLFieldProps<
  number,
  HTMLDivElement,
  { decimal?: boolean; inputRef?: Ref<HTMLInputElement>, description?: string }
>;

function Num({
  decimal,
  disabled,
  id,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  readOnly,
  step,
  value,
  ...props
}: NumFieldProps) {
  return (
    <div {...filterDOMProps(props)}>
      <LabelField label={label} id={id} required={props.required} />

      <input
        className='block w-full py-2 pr-2 sm:text-sm appearance-none disabled:opacity-50 rounded bg-[var(--vscode-input-background)] text-[var(--vscode-input-foreground)] placeholder-[var(--vscode-input-placeholderForeground)] border-[var(--frontmatter-border)] focus:border-[var(--vscode-focusBorder)] focus:outline-0'
        disabled={disabled}
        id={id}
        max={max}
        min={min}
        name={name}
        onChange={(event) => {
          const parse = decimal ? parseFloat : parseInt;
          const value = parse(event.target.value);
          onChange(isNaN(value) ? undefined : value);
        }}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={inputRef}
        step={step || (decimal ? 0.01 : 1)}
        type="number"
        value={value ?? ''}
      />

      {
        props.description && (
          <span className='block text-xs text-[var(--vscode--settings-headerForeground)] opacity-75 mt-2 mx-2'>{props.description}</span>
        )
      }
    </div>
  );
}

export default connectField<NumFieldProps>(Num, { kind: 'leaf' });
