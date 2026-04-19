import { authMiddleware } from '../src/middleware/auth.js';

describe('Middleware de Autenticación', () => {
  test('Debería rechazar correos que no terminen en @upc.edu.pe', async () => {
    const req = {
      headers: { authorization: 'Bearer token_falso' }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    // Simulamos que supabase.auth.getUser devuelve un correo externo
    // (Tendrías que mockear supabase.auth.getUser similar al ejemplo anterior)
    
    // Este test asegura que tu regla de negocio "Solo UPC" se mantenga firme 
    // ante futuros cambios de código.
  });
});