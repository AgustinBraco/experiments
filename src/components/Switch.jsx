import { forwardRef } from 'react';

export const Switch = forwardRef((props, ref) => {
  const { title, name, icon } = props;
  return (
    <div id="Switch">
      <p className="SwitchTitle">{title}</p>
      <div ref={ref} className={`SwitchButton ${name}`}>
        <div className="SwitchIcon">
          <i className={`bx ${icon}`}></i>
        </div>
      </div>
    </div>
  );
});
