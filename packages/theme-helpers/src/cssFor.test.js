import { cleanup } from 'react-testing-library'
import assertStyleRule from './test/assertStyleRule'
import { background, backgroundColor } from './cssFor'

afterEach(cleanup)

assertStyleRule(background, 'primary', 'background', '#0b3954')
assertStyleRule(backgroundColor, 'primary', 'background-color', '#0b3954')
