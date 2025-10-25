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
                <div className='relative p-5 group'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Frontend</h3>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <HTMLIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>HTML</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <CSSIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>CSS</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <VueIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Vue</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <JavaScriptIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Javascript</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <ReactIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>React</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <TypeScriptIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Typescript</p>
                        </div>
                    </div>
                </div>
                <div className='relative p-5 group'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Backend</h3>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <JavaIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Java</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <SpringBootIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Spring Boot</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <MySQLIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>MySQL</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <ExpressJSIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>ExpressJS</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <PythonIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Python</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <PHPIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className='relative p-5 group'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Herramientas</h3>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <GitIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Git</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <WordpressIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Wordpress</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <VSCodeIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Vscode</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <IntelliJIdeaIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Intellij</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <TerminalIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Terminal</p>
                        </div>
                    </div>
                </div>
                <div className='relative p-5 group'>
                    <span className='absolute left-0 w-[3px] h-0 group-hover:h-full duration-1000 bg-secondary transition-all'></span>
                    <h3 className='pb-10'>Aprendiendo</h3>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <PyTorchIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>PyTorch</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <DockerIcon className="w-10 text-gray-200 text-opacity-40" />
                            <p>Docker</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills