import rootReducer from '../reducers'

describe('nop', () => {
  it('should do nothing', () => {
    const state = {}
    const action = { type: 'NOP' }
    const { nop } = rootReducer(state, action)

    expect(nop).toEqual(state)
  })
})
