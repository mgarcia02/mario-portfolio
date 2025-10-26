import HTMLIcon from '@/assets/icons/html5.svg?react'
import CSSIcon from '@/assets/icons/css.svg?react'
import JavaScriptIcon from '@/assets/icons/javascript.svg?react'
import TypeScriptIcon from '@/assets/icons/typescript.svg?react'
import ReactIcon from '@/assets/icons/react.svg?react'
import JavaIcon from '@/assets/icons/java.svg?react'
import SpringBootIcon from '@/assets/icons/springboot.svg?react'
import MySQLIcon from '@/assets/icons/mysql.svg?react'
import DockerIcon from '@/assets/icons/docker.svg?react'
import GitIcon from '@/assets/icons/git.svg?react'
import PythonIcon from '@/assets/icons/python.svg?react'
import PyTorchIcon from '@/assets/icons/pytorch.svg?react'
import ExpressJSIcon from '@/assets/icons/expressjs.svg?react'
import PHPIcon from '@/assets/icons/php.svg?react'
import TerminalIcon from '@/assets/icons/terminal.svg?react'
import VSCodeIcon from '@/assets/icons/vscode.svg?react'
import WordpressIcon from '@/assets/icons/wordpress.svg?react'
import IntelliJIdeaIcon from '@/assets/icons/intellij.svg?react'
import VueIcon from '@/assets/icons/vue.svg?react'

function Skills() {
    return (
        <section id='skills' className="skills section-container">
            <h2 className="mb-12 text-3xl font-bold">Habilidades</h2>
            <div className='grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4'>
                <div className='relative p-5 group/section'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover/section:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Frontend</h3>
                    <div className='flex flex-wrap gap-8'>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <HTMLIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">HTML</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <CSSIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">CSS</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <VueIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Vue</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <JavaScriptIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">JavaScript</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <ReactIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">React</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group '>
                            <TypeScriptIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">TypeScript</p>
                        </div>
                    </div>
                </div>
                <div className='relative p-5 group/section'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover/section:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Backend</h3>
                    <div className='flex flex-wrap gap-8'>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <JavaIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Java</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <SpringBootIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Spring</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <MySQLIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">MySQL</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <ExpressJSIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">ExpressJS</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <PythonIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Python</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <PHPIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">PHP</p>
                        </div>
                    </div>
                </div>
                <div className='relative p-5 group/section'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover/section:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Herramientas</h3>
                    <div className='flex flex-wrap gap-8'>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <GitIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Git</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <WordpressIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">WordPress</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <VSCodeIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Vscode</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <IntelliJIdeaIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">IntelliJ</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <TerminalIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Terminal</p>
                        </div>
                    </div>
                </div>
                <div className='relative p-5 group/section'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover/section:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Aprendiendo</h3>
                    <div className='flex flex-wrap gap-8'>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <PyTorchIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">PyTorch</p>
                        </div>
                        <div className='relative flex flex-col items-center pb-5 group'>
                            <DockerIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p className="absolute bottom-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">Docker</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills