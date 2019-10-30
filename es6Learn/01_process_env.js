//process是全局变量

//
process.env //当前运行系统环境


/* { ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\mk10778\\AppData\\Roaming',
  CLASSPATH:
   '.;C:\\Program Files\\Java\\jdk-12.0.2\\lib;C:\\Program Files\\Java\\jdk-12.0.2\\lib\\tools.jar',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'ITHPZJ01113',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',
  FP_NO_HOST_CHECK: 'NO',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\mk10778',
  JAVA_HOME: 'C:\\Program Files\\Java\\jdk-12.0.2',
  LOCALAPPDATA: 'C:\\Users\\mk10778\\AppData\\Local',
  LOGONSERVER: '\\\\HSA1711002',
  NUMBER_OF_PROCESSORS: '4',
  OS: 'Windows_NT',
  Path:
   'C:\\Program Files (x86)\\NetSarang\\Xshell 6\\;C:\\Program Files (x86)\\NetSarang\\Xftp 6\\;%CommonProgramFiles%\\Microsoft Shared\\Windows Live;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;E:\\tool\\code-tool\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\Program Files\\Java\\jdk-12.0.2\\bin; C:\\Program Files\\Java\\jdk-12.0.2\\jre\\bin;C:\\Program Files\\PuTTY\\;F:\\Python\\Scripts\\;F:\\Python\\;E:\\tool\\code-tool\\Microsoft VS Code\\bin;C:\\Users\\mk10778\\AppData\\Roaming\\npm;C:\\Users\\mk10778\\AppData\\Local\\Yarn\\bin',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 60 Stepping 3, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '3c03',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PROMPT: '$P$G',
  PSModulePath: 'C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
  PUBLIC: 'C:\\Users\\Public',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\mk10778\\AppData\\Local\\Temp',
  TMP: 'C:\\Users\\mk10778\\AppData\\Local\\Temp',
  USERDNSDOMAIN: 'MAKEBLOCK.LOCAL',
  USERDOMAIN: 'MAKEBLOCK',
  USERNAME: 'mk10778',
  USERPROFILE: 'C:\\Users\\mk10778',
  windir: 'C:\\Windows',
  windows_tracing_flags: '3',
  windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log',
  TERM_PROGRAM: 'vscode',
  TERM_PROGRAM_VERSION: '1.39.2',
  LANG: 'zh_CN.UTF-8',
  COLORTERM: 'truecolor' }
 */
my_os = process.env.OS;  //查看系统
console.log(my_os);
my_lang = process.env.LANG;
console.log(my_lang);
