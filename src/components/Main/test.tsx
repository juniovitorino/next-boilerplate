import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should render h1 heading', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
