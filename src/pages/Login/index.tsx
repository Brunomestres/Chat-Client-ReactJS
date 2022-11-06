import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false)

  const handleSubmit = () => {
    if(!password || !email){ 
      console.log('dsf')
      setOpen(true)
    }
  }
  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <a href="#">
          <h1 className="text-4xl font-bold text-white text-center">Startup</h1>
        </a>
      </header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Logue com sua conta</h3>
        </section>

        <section className="mt-10">
          <div className="flex flex-col">
            <div className="mb-6 pt-3">
              <label
                className="block text-gray-700 text-md font-bold mb-2 ml-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event: FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}
                className="bg-gray-200 rounded w-full h-12 text-gray-700 focus:outline-none border-gray-300 transition duration-500 px-3"
              />
            </div>
            <div className="mb-6 pt-3">
              <label
                className="block text-gray-700 text-md font-bold mb-2 ml-1"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                onChange={(event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
                value={password}
                className="bg-gray-200 rounded w-full h-12 text-gray-700 focus:outline-none border-gray-300 transition duration-500 px-3"
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
              >
                Esqueceu a senha?
              </a>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              onClick={handleSubmit}
            >
              Entrar
            </motion.button>
          </div>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">
          Don't have an account?{" "}
          <a href="#" className="font-bold hover:underline">
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  );
};
