import { FaBox } from "react-icons/fa";
export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primaryBg">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
        {/* logo */}
        <div className="flex justify-center">
          <div className="p-4 bg-primary rounded-xl mb-6">
            <FaBox className="h-6 w-6 text-white mb-0" />
          </div>
        </div>
        {/* título */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
          <p className="text-slate-400 mb-2">Ingresa tu email para continuar</p>
        </div>

        {/* formulario */}
        <form className="flex flex-col space-y-4">
          <label className="space-y-1">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              className="w-full p-2 border border-gray-300 rounded-xl"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-gray-700">
              Contraseña
            </span>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="w-full p-2 border border-gray-300 rounded-xl"
            />
          </label>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="text-sm text-gray-700">Recuérdame</span>
            </label>
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Ingresar
          </button>
          <p className="text-center text-sm text-gray-500">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
