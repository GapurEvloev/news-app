import classNames from "classnames";
import styles from './Loader.module.scss';

interface LoaderProps {
  classes?: string;
}

export const Loader = ({ classes }: LoaderProps) => (
  <div className={classNames(styles['lds-roller'], {}, [classes])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
