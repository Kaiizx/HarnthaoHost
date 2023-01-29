import classes from './Header.module.css'
import BillIcon from './icon/BillIcon';
const Header = () => {
  return (
    <nav className={classes.nav}>
       <div className={classes.icon}>
        <BillIcon></BillIcon>
       </div>
      <div>
      <h1 class="text-2xl font-bold text-gray-50">Harnthao</h1>
      </div>
    </nav>
  );
};
export default Header;
