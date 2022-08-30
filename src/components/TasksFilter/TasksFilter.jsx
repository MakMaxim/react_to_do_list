import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import './TasksFilter.scss';

const TasksFilter = ({ filter, setFilter }) => {
   return (
      <div className="tasks-filter">
         <div className="tasks-filter__search">
            <MyInput
               // className="tasks-filter__input"
               value={filter.query}
               onChange={(e) => setFilter({ ...filter, query: e.target.value })}
               placeholder="Поиск..."
            />
            <MyButton onClick={() => setFilter({ ...filter, query: '' })}>
               Очистить
            </MyButton>
         </div>
         <MySelect
            className="tasks-filter__select"
            value={filter.sort}
            onChange={(selectedSort) =>
               setFilter({ ...filter, sort: selectedSort })
            }
            // defaultValue="Все"
            options={[
               { value: 'all', name: 'Все' },
               { value: 'yes', name: 'Выполненные' },
               { value: 'no', name: 'Невыполненные' },
            ]}
         />
      </div>
   );
};

export default TasksFilter;
