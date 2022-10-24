import { PropTypes } from 'prop-types';
import {
  StatisticWrapp,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from 'components/Statistics/Statistics.styled';

export const StatisticCard = ({ title, stats }) => (
  <StatisticWrapp>
    {title && <StatisticTitle>{title}</StatisticTitle>}
    <StatisticList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id}>
          <StatisticLabel>{label}</StatisticLabel>
          <StatisticPercentage>{percentage}</StatisticPercentage>
        </StatisticItem>
      ))}
    </StatisticList>
  </StatisticWrapp>
);

StatisticCard.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
