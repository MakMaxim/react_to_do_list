import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import './TasksFilter.scss';

const TasksFilter = ({ filter, setFilter }) => {
   return (
      <div className="tasks-filter">
         <MyInput
            // className="tasks-filter__input"
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            placeholder="Поиск..."
         />
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
