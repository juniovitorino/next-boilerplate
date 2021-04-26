import { render, screen } from '@testing-library/react'
import Home from './index'

describe('<Home />', () => {
  it('should render the home', () => {
    render(<Home />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
