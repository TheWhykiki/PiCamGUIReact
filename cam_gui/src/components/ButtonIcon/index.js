import './Button.scss';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

function ButtonIcon({ icon, ...props }) {
  return (
    <button {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default ButtonIcon;
