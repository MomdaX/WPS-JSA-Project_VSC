// 该文件定义了WPS各组件下的相同的全局对象


/**
 * 文件状态信息接口
 */
export interface IFSStats {

    /**
     * 文件最后访问时间
     */
    readonly atime: Date

    /**
     * 文件最后访问时间（毫秒）
     */
    readonly atimeMs: number

    /**
     * 文件创建时间
     */
    readonly birthtime: Date

    /**
     * 文件创建时间（毫秒）
     */
    readonly birthtimeMs: number

    /**
     * 文件系统块大小
     */
    readonly blksize: number

    /**
     * 链接到文件的数量
     */
    readonly nlink: number

    /**
     * 文件设备标识符
     */
    readonly rdev: number

    /**
     * 文件使用的块数
     */
    readonly blocks: number

    /**
     * 文件状态更改时间
     */
    readonly ctime: Date

    /**
     * 文件状态更改时间（毫秒）
     */
    readonly ctimeMs: number

    /**
     * 文件所在设备标识符
     */
    readonly dev: number

    /**
     * 文件所属组标识符
     */
    readonly gid: number

    /**
     * 文件标识符
     */
    readonly ino: number

    /**
     * 文件模式（权限）
     */
    readonly mode: number

    /**
     * 文件最后修改时间
     */
    readonly mtime: Date

    /**
     * 文件最后修改时间（毫秒）
     */
    readonly mtimeMs: number

    /**
     * 文件大小（字节）
     */
    readonly size: number

    /**
     * 文件所有者标识符
     */
    readonly uid: number

    /**
     * 判断文件是否是块设备
     */
    isBlockDevice(): boolean

    /**
     * 判断文件是否是字符设备
     */
    isCharacterDevice(): boolean

    /**
     * 判断文件是否是目录
     */
    isDirectory(): boolean

    /**
     * 判断文件是否是命名管道
     */
    isFIFO(): boolean

    /**
     * 判断是否是文件
     */
    isFile(): boolean

    /**
     * 判断文件是否是套接字
     */
    isSocket(): boolean

    /**
     * 判断文件是否是符号链接
     */
    isSymbolicLink(): boolean
}

/**
 * JSA文件操作接口
 */
export interface IFileSystem {
    /**
     * 往文件末尾添加数据
     * @param filePath - 要写入的文件路径
     * @param data - 要写入文件的内容
     */
    AppendFile(filePath: string, data: string): void

    /**
     * 生成文件副本
     * @param srcFilePath - 源文件的路径包括文件路径
     * @param destFilePath - 新创建的文件副本文件路径
     */
    copyFileSync(srcFilePath: string, destFilePath: string): void

    /**
     * 判断一个文件和文件夹是否存在。
     * @param path - 文件或文件夹的路径，这个路径一定要是一个全路径。
     * @returns 如果文件或文件夹存在，返回 true，否则返回 false。
     */
    Exists(path: string): boolean

    /**
     * 判断目录是否存在
     * @param filePath - 要判断的文件的名称
     * @returns 如果目录存在，返回 true，否则返回 false。
     */
    existsSync(filePath: string): boolean

    /**
     * 根据给定的 {@linkcode path} 创建一个文件夹。
     * @param path - 要创建的文件夹的路径，这个路径一定要是一个全路径。
     */
    Mkdir(path: string): void

    /**
     * 创建目录
     * @param filePath - 创建目录的路径
     */
    mkdirSync(filePath: string): void

    /**
     * 创建临时目录
     * @param filePath - 临时目录的路径
     */
    mkdtempSync(filePath: string): void

    /**
     * 读取指定路径的文件，返回二进制字符串数据。
     * @param filePath - 文件路径
     */
    readAsBinaryString(filePath: string): string

    /**
     * 获取目录下的子目录对象数组（包含目录相关属性）
     * @param filePath - 要获取的目录的路径
     */
    readdirSync(filePath: string): string[]

    /**
     * 获取文件的内容
     * @param filePath - 要读取文件内容的路径
     */
    ReadFile(filePath: string): string

    /**
     * 读取指定路径的文件，返回字符串。
     * @param filePath - 文件路径
     */
    readFileString(filePath: string): string

    /**
     * 删除指定的 {@linkcode path} 所代表的文件或文件夹。
     * @param path - 要删除的文件或文件夹的路径，这个路径一定要是一个全路径。
     */
    Remove(path: string): void

    /**
     * 删除目录
     * @param filePath - 要删除的文件目录路径
     */
    rmdirSync(filePath: string): void

    /**
     * 获取系统的临时文件目录
     */
    tmpdir(): string

    /**
     * 删除文件
     * @param filePath - 要删除的文件路径
     */
    unlinkSync(filePath: string): void

    /**
     * 写二进制字符串对象到指定文件。
     * @param filePath - 文件路径
     * @param binaryString - 二进制字符串数据
     */
    writeAsBinaryString(filePath: string, binaryString: string): void

    /**
     * 创建文件
     * @param filePath - 文件路径
     */
    WriteFile(filePath: string): void

    /**
     * 写字符串到指定路径的文件。
     * @param filePath - 文件路径
     * @param data - 字符串数据
     */
    writeFileString(filePath: string, data: string)

    /**
     * 获取文件属性
     * @param path - 文件路径
     */
    stat(path: string): IFSStats
}

/**
 * 系统环境信息接口。
 */
export interface IEnv {
    /**
     * 获取系统%AppData%/Roming目录的路径，仅Windows平台适用。
     */
    GetAppDataPath(): string

    /**
     * 获取系统DPI。
     */
    GetDesktopDpi(): number

    /**
     * 获取系统HOME目录的路径，代表当前用户主目录。
     */
    GetHomePath(): string

    /**
     * 获取系统ProgramData目录的路径，仅windows平台适用。
     */
    GetProgramDataPath(): string

    /**
     * 获取系统ProgramFiles目录的路径，仅Windows平台适用。
     */
    GetProgramFilesPath(): string

    /**
     * 获取系统根目录的路径。
     */
    GetRootPath(): string

    /**
     * 获取系统临时目录的路径。
     */
    GetTempPath(): string
}

/**
 * 宏编辑器的调试对象，提供调试辅助接口。
 */
export interface IDebug {
    /**
     * 触发JavaScript引擎进行垃圾回收。
     */
    GC(): void

    /**
     * 在立即窗口中输出文本。
     * @param outputlist - 要打印的表达式或表达式列表。 如果省略，将打印空行。
     */
    Print(outputlist?: any): void
}

/**
 * 控制台相关接口
 */
export interface IConsole {
    /**
     * 在立即窗口打印信息。
     * @param args - 要输出的日志信息
     */
    log(...args: any): void

    /**
     * 清空立即窗口中的内容。
     */
    clear(): void
}

declare global {
    interface Object {
        /**
         * 原型对象
         */
        __proto__: any
    }

    /**
     * 此对象主要用于获取系统环境基本信息，这个对象目前提供了取用户目录、临时目录等相关信息
     */
    const Env: IEnv

    /**
     * 宏编辑器的调试对象，提供调试辅助对象。
     */
    const Debug: IDebug

    /**
     * 此方法将暂时停止当前的宏执行，在处理完进程的消息队列中的消息后返回再继续宏的执行。
     */
    function DoEvents(): void

    /**
     * 弹出显示自定义提示信息的输入对话框，等待用户在输入框中输入文本或单击按钮，然后返回输入框的内容。
     * @param prompt - 在对话框中显示的消息的字符串表达式。
     * @param title - 对话框标题栏中显示的字符串表达式。 如果省略 title，则标题栏中将显示应用程序名称。
     * @param defaultStr - 文本框中显示的字符串表达式，在未提供其他输入时作为默认响应。 如果省略了 default，文本框将显示为空。
     * @param xpos - 指定对话框的左边缘与屏幕的左边缘的水平距离（以缇为单位）的数值表达式。 如果省略了 xpos，对话框将水平居中。
     * @param ypos - 指定对话框的上边缘与屏幕的顶部的垂直距离（以缇为单位）的数值表达式。 如果省略了 ypos，对话框将将垂直居中。
     * @returns 如果用户选择"确定 " 或按 Enter，InputBox 函数将返回文本框中的内容。 如果用户选择"取消 "， 函数将返回一个空字符串。
     */
    function InputBox(prompt: string, title?: string, defaultStr?: string, xpos?: number, ypos?: number): string

    /**
     * 弹出显示自定义提示信息的消息框，等待用户在消息框中选择一个按钮，然后返回按钮的标识。
     * @param prompt - 在对话框中显示的消息的字符串表达式。
     * @param buttons - 数值表达式，用于指定要显示按钮的数量和类型、要使用的图标样式、默认按钮的标识和消息框的形式的值（JSMsgBoxStyle）之和。 如果省略，则 buttons 的默认值为 0。
     * @param title - 对话框标题栏中显示的字符串表达式。 如果省略，则标题栏中将显示应用程序名称。
     * @returns 返回数值。表示用户点击MsgBox弹出消息框的按钮。在点击MsgBox弹出消息框之前不会返回。如果对话框中显示“取消”按钮，按 ESC 键与单击“取消”具有相同的作用。
     */
    function MsgBox(prompt: string, buttons?: number, title?: string): number
}

/**
 * 对文件和文件夹的一些基本和常见的操作接口
 */
export const FileSystem: IFileSystem