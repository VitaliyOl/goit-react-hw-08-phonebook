import { useTranslation } from 'react-i18next';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import { FlagBtn, Label, Container } from './LangToggle.styled';

export default function LangToggle() {
  const { i18n } = useTranslation();

  const handleLangChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    i18n.changeLanguage(value);
  };

  const currentLanguage = localStorage.getItem('i18nextLng') || 'en';

  return (
    <Container>
      {currentLanguage === 'uk' ? (
        <FlagBtn type="button" onClick={handleLangChange} value="gb">
          <span className="circular-flag">
            <span className="fi fi-ua"></span>
          </span>
          <Label>UA</Label>
        </FlagBtn>
      ) : (
        <FlagBtn type="button" onClick={handleLangChange} value="uk">
          <div className="circular-flag">
            <span className="fi fi-gb"></span>
          </div>
          <Label>EN</Label>
        </FlagBtn>
      )}
    </Container>
  );
}
