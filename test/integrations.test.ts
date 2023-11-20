import build from '../src/app'

describe('API tests', () => {
  it('returns 200 for GET /test', async () => {
    const app = build()

    const response = await app.inject({
      method: 'GET',
      url: '/test',
    })

    expect(response.statusCode).toBe(200)
  })
})
