import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div style={{ width: 360, textAlign: 'center', marginTop: 100 }}>
      <h1>{t('WELCOME TO YOUR PHONEBOOK')}</h1>
    </div>
  );
}

export default Home;
