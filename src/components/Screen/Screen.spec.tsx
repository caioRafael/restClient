import { render } from '@testing-library/react'
import Screen from '.'

test('Screen should renders', () => {
    const {getByText, getByAltText} = render(<Screen/>)

    expect(
        getByText('Screen main')
      ).toBeTruthy()
      expect(getByAltText('h1')).toBeTruthy()
})