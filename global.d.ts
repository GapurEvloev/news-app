declare module '*.scss' { // for css modules support in typescript files
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}