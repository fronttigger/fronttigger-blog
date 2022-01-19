import { MESSAGE } from '@constants'
import IndexPage from '@pages/index'
import { render, screen } from '@testing-library/react'

describe('Message', () => {
  it('1205 텍스트가 노출된다', () => {
    render(<IndexPage />)

    expect(screen.getByText(MESSAGE)).toBeInTheDocument()
  })
})
