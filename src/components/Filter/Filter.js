import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'store/contactsSelectors';
import { filterContact } from 'store/contactSlice';

import s from '../Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        // onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
