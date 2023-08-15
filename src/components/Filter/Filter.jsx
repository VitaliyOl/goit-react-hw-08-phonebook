import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import debounce from 'lodash.debounce';
import { useTranslation } from 'react-i18next';

export default function Filter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterInput
        type="text"
        placeholder={t('search by name')}
        onChange={debounce(handleChange, 500)}
      ></FilterInput>
    </>
  );
}
