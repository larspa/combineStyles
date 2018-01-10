# combineStyles
Combines multiple style objects.

## Setup
```sh
yarn add combineStyles
```

## Example

```javascript
import cs from 'combineStyles';

import firstStyles from './firstStyles.scss';
import secondStyles from './secondStyles.scss';

const combinedStyles = cs([firstStyles, secondStyles]);
```