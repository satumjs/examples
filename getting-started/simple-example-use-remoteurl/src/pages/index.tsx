import styles from './index.less';

function linkto(path: string) {
  history.pushState(path, '', null);
}

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ul className={styles.nav}>
        <li>
          <a href="" onClick={(e) => e.preventDefault() && linkto('/')}>
            antd-pro
          </a>
        </li>
        <li>
          <a href="" onClick={(e) => e.preventDefault() && linkto('/store')}>
            store
          </a>
        </li>
      </ul>
      <div id="microAppMountNode"></div>
    </div>
  );
}
