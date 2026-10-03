import { Text } from 'preact-i18n';
import { DEVICE_FEATURE_CATEGORIES } from '../../../../../../../server/utils/constants';
import { formatCurrencyValue, smartRound } from '../../../../../../../server/utils/units';

// A price keeps its own digits (2.168 EUR/L, not 2.17): smartRound is made for sensor readings.
const formatValue = deviceFeature =>
  deviceFeature.category === DEVICE_FEATURE_CATEGORIES.CURRENCY
    ? formatCurrencyValue(deviceFeature.last_value)
    : smartRound(deviceFeature.last_value);

const RawDeviceValue = ({ deviceFeature }) => (
  <div>
    {deviceFeature.last_value === null && <Text id="dashboard.boxes.devicesInRoom.noValue" />}
    {deviceFeature.last_value !== null && (
      <span>
        {`${formatValue(deviceFeature)} `}
        <Text id={`deviceFeatureUnitShort.${deviceFeature.unit}`} />
      </span>
    )}
  </div>
);

export default RawDeviceValue;
