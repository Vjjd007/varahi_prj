import { useLang } from '../context/LangContext';

const YEARS = ['2023', '2024', '2025', '2026', 'Upcoming'];

export default function YearFilter({ selected, onChange }) {
  const { t } = useLang();

  return (
    <div className="filter-bar">
      <span className="filter-label">{t.filterByYear}:</span>
      <button
        className={`filter-pill ${selected === 'all' ? 'active' : ''}`}
        onClick={() => onChange('all')}
      >
        {t.all}
      </button>
      {YEARS.map(year => (
        <button
          key={year}
          className={`filter-pill${year === 'Upcoming' ? ' upcoming' : ''} ${selected === year ? 'active' : ''}`}
          onClick={() => onChange(year)}
        >
          {year === 'Upcoming' ? t.upcoming : year}
        </button>
      ))}
    </div>
  );
}
