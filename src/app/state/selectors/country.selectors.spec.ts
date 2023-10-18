import * as fromCountry from '../reducers/country.reducer';
import { selectCountryState } from './country.selectors';

describe('Country Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCountryState({
      [fromCountry.countryFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
