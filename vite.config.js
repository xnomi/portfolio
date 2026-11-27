import 'dotenv/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function localApiPlugin() {
  return {
    name: 'local-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          let body = ''
          for await (const chunk of req) body += chunk
          req.body = body ? JSON.parse(body) : {}
        } catch {
          req.body = {}
        }

        const wrappedRes = {
          statusCode: 200,
          status(code) {
            this.statusCode = code
            return this
          },
          json(payload) {
            res.statusCode = this.statusCode
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(payload))
            return this
          },
        }

        const { default: handler } = await import('./api/chat.js')
        await handler(req, wrappedRes)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin()],
})
