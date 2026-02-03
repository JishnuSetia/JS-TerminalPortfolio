import './style.css'

const terminalContainer = document.getElementById('terminal-container');
const output = document.getElementById('output');
const input = document.getElementById('command-input');
const promptDisplay = document.getElementById('prompt');

// Virtual File System Definition
const VFS = {
  name: '/',
  type: 'dir',
  children: {
    bin: {
      type: 'dir', children: {
        'whoami.exe': { type: 'file', content: 'Displays current user identity' },
        'neofetch.sh': { type: 'file', content: 'Shows system info with cool logos' }
      }
    },
    boot: {
      type: 'dir', children: {
        'kernel.img': { type: 'file', content: 'The imaginary kernel for your portfolio OS' },
        'grub.cfg': { type: 'file', content: 'Bootloader config for fun' }
      }
    },
    dev: {
      type: 'dir', children: {
        'tty0': { type: 'file', content: 'Virtual terminal 0' },
        'null': { type: 'file', content: 'Nothing goes here 😎' }
      }
    },
    etc: {
      type: 'dir', children: {
        'hosts': { type: 'file', content: '127.0.0.1 localhost\n::1 localhost' },
        'motd.txt': { type: 'file', content: 'Welcome to Jishnu\'s Portfolio Terminal!' },
        '.passwords.txt': {
          type: 'file',
          content: `
  <span class="ascii-logo2">
                                                                                                                                                                                                                                  
                                                                                                                                    %#@%@@@@@@@@@@@@@@@@@@%@*                                                                   
                                                                                                                            @%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                                           
                                                                                                                       @%@@@@@@@@@@@@@@@@@@@@@@%%%@@@@%%@@@@@@@@@@@@@@@@%%                                                      
                                                                                                                   @@@@@@@@@@@@@@@@@%#                           #@@@@@@@@@@@%                                                  
                                                                                                               %@@@@@@@@@@@@@@%                                        @@@@@@@@@@                                               
                                                                                                            %@@@@@@@@@@@@@%                                                %@@@@@@@%                                            
                                                                                                          @@@@@@@@@@@@                                                        %@@@@@@@                                          
                                                                                                       @@@@@@@@@@@@                                                              @@@@@@%                                        
                                                                                                     @@@@@@@@@@@                                                                   %@@@@@@                                      
                                                                                                   @@@@@@@@@@                                                                        @@@@@@                                     
                                                                                                 @@@@@@@@@%                                                                            %@@@@                                    
                                                                                               %@@@@@@@@@                                                                                %@@@%                                  
                                                                                              @@@@@@@@                                                                                    %@@@%                                 
                                                                                            @@@@@@@@@                                                                                      %@@@                                 
                                                                                           @@@@@@@#                                                                                         @@@@%                               
                                                                                         %@@@@@@@                                                                                            #@@@=                              
                                                                                        @@@@@@@#                                                                                              @@@@                              
                                                                                       @@@@@@@@                                                                                                %@@@                             
                                                                                     %@@@@@@@                                                                                                   @@@@                            
                                                                                     @@@@@@@                                                                                                     @@@@                           
                                                                                   %@@@@@@%                                                                                                      #@@@%                          
                                                                                  #@@@@@@@                                                                                                        #@@@@                         
                                                                                  @@@@@@@                                                                                                          @@@@                         
                                                                                 @@@@@@@                                                                                                            @@@@                        
                                                                                %@@@@@@                                                                                                             %@@@#                       
                                                                               *@@@@@@%                                             %@@@@@@@@@@@                                                     %@@@                       
                                                                               @@@@@@@                                          #@@@@@@@@@@@@@@%                                                      @@@@                      
                                                                              #@@@@@@                                         @@@@@@@@@@%#                                                            #@@@+                     
                                                                              @@@@@@%                                        @@@@@@%      #%@@@@@@@*                                                   @@@@                     
                                                                             @@@@@@@                                       @@@@@      @@@@@@@@@@@@@@@@@%                                               @@@@                     
                                                                             @@@@@@                                        @@%     @@@@@@%%     #@@@@@@@@@+                                             @@@*                    
                                                                   %@@@@@@% %@@@@@@                                             %@@@@*               %@@@@@@%                                           #@@%                    
                                                                 #@@@@@@@@@@@@@@@@@                                           @@@@@                     @@@@@@@                                         %@@@                    
                                                                @@@@@@@@@@@@@@@@@@                                          #@@@%                         @@@@@@@                                        @@@                    
                                                               @@@@@@%     @@@@@@@                                          @@%                             %@@@@%                   @%@                 @@@                    
                                                              %@@@@@%       @@@@@                                                                             @@@@@%          @@    %@@@@                @@@                    
                                                              @@@@@@           =                                                                               %@@@@%         @@*    %@@@@              @@@%                    
                                                             @@@@@@%  %@%@%                                                                            %@@%      %@@@@%      @@@     @@@@@@             %@@%                    
                                                             @@@@@@  @@@@@@@%                                                                          @@@@@%      %@@@@%   @@@@     %@@@@@             @@@                     
                                                             @@@@@% %@@ @@@@@                                                        @@@@@@@@@*        @@@@@@%       %@@@@@@@@@      @@@@@             #@@@                     
                                                             @@@@@@ @@   @@@@@                                                   %@@@@@@@@@@@@@@@@%     %@@@@@@        @@@@@@%      @@@@@#             @@@@                     
                                                             @@@@@@      %@@@@                                                 @@@@@@@@@%@@@%@@@@@@@%    %@@@@@           +        %@@@@@              @@@*                     
                                                             @@@@@%      @@@@@                                               %@@@@@@%%@@@@@@@@@@%@@@@@@   %@@@@+                  %@@@@@               @@@                      
                                                             @@@@@%      @@@@%                                               @@@@@  @@@@@@@@@@@@@  @@@@@   %@@@@                 @@@@@                 @@@                      
                                                             @@@@@@     @@@@@*                                              %@@@@   %@@@@@@@@@@@@+   @@@@   *@@                 @@@@%      #@%%@      =@@#                      
                                                             @@@@@@     %@@@@                                               @@@@@   @@@@@@@@@@@@@     @@@@                   @@@@@#     %@@@@@@@@@@@% #@@#                      
                                                             @@@@@#     @@@@@                                                @@@@@%  *@@@@@@@@@@@      %@@@                             %#@  @%@@@@@@@@@@%                      
                                                             @@@@@@      @@@@@                                                %@@@@@@@@+%%@@%%        #@@@@%                                      +@@@@@@#                      
                                                             @@@@@@      *@@@@@                                                  @@@@@@@@@@@@@@@@@@@@@@@@@                         %@@@@@@#          @@@@@                      
                                                              @@@@@#       @@@@@                                                      %@@@@@@@@@@@%@=                           #@@@@@@@@@@@@@@      @@@@                       
                                                              @@@@@@        @@@@@                                                                      @@                       @@@@@@@@@@@@@@@@@   @@@@                        
                                                              %@@@@@         @@@@                                                                    %@@@%                      #@@@@@@@@@  %@@@@@ #@@@%                        
                                                               @@@@@#        @@@@                                                                  @@@@@@                        @@@@@@@@   @@@@@ %@@@@                         
                                                                @@@@@      @@@@@%                                                               %%@@@@@#                         @@@@@@@  %@@@@@%%@@@+                          
                                                                @@@@@%     @@@@%                                                              @@@@@@@@                           @@@   %@@@@@@@%%@@@#                           
                                                                 @@@@@@                                                                     @@@@@@@@#                            @@@% +@@@@@@@  @@@                             
                                                                  %@@@@@                                                              @@@@@@@@@@@@@                              @@@@           @@@                             
                                                                   @@@@@@@@@@                                                          %@@@@@@@%                                 @@@@           @@@@                            
                                                                     @@@@@@@%                                                                                                    %@@@            @@@                            
                                                                       @@@@@%                                                                                                    %@@@            @@%                            
                                                                       %@@@@                                                                                                     %@@@            @@@                            
                                                                       @@@@#                                                                                                     %@@@*          -@@@                            
                                                                      @@@@@%                                                                                                     %@@@%          @@@@                            
                                                                      @@@@%                                                                       %@                              @@@@          @@@@                            
                                                                      @@@@                                                                     #@@@@                              @@@@@%        @@%                             
                                                                     #@@@@                                                                    @@@#                                 #@@@@       @@@                              
                                                                     @@@@@                                                                   @@@                                    %@@@@     @@@*                              
                                                                    @@@@@                                                                   +@@%                                     @@@@@% %@@@                                
                                                                    %@@@@                                                                   %@@+               +                      @@@@@@@@@                                 
                                                                    @@@@@           %                                                        @@@           @@@@@@@@%                 %@@@@@@@                                   
                                                                   +@@@@@         %@@@                                                       @@@#        @@@@@@@@@@@@              *@@@@@@@                                     
                                                                   %@@@@          @@@@                                                        @@@@#    %@@@@@@@@@@@@@@           %@@@@@@@@                                      
                                                                   @@@@%          @@@@                                                         %@@@@@@@@@@@@      @@@@%       @@@@@@@@@@@                                       
                                                                   @@@@           @@@@                                    @@%                    %@@@@@@@%        @@@@@@@@@@@@@@@@@@@@@#                                        
                                                                  %@@@@           @@@@                                 @@@@@@                                      @@@@@@@@@@@@@@@@%@@%                                         
                                                                  @@@@@           %@@%                                @@@@@%                                         @@@@@@@@@@@    @@                                          
                                                                 %@@@@            @@@@                               @@@@@%                                                        @@@                                          
                                                                 @@@@%            +@@@                              @@@@@%                                                        @@@#                                          
                                                                +@@@@%             @@@@                            #@@@%                                                         #@@@                                           
                                                                @@@@@              %@@@                            @@@                                                           @@@                                            
                                                                @@@@               %@@@%                                                                                        @@@                                             
                                                               @@@@%                @@@@                                          %@@@@%                                       @@@#                                             
                                                              %@@@@                  @@@@                                       @@@@@@                                        @@@@                                              
                                                             @@@@@@                  @@@@@                                    @@@@@@@@@@%@%@@@%@%@@@@@@@@@@%                 %@@%                                               
                                                            %@@@@#                    @@@@%                                   @@@@    %@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@                                                
                                                           %@@@@%                      @@@@@                                 %@@@           %@%%%@%+     %%@@@@@@@@@@@@@@@@@@@@%                                                
                                                          @@@@@@                        @@@@@                                                                 %@@@@@%      +@@@                                                 
                                                        *@@@@@                           @@@@@@                                                                            @@@@@@@%                                             
                                                      @@@@@@@                             @@@@@@                                                                           *@@@@@@@@@@@@%                                       
                                                    %@@@@@%                                 @@@@@@                                                 %#                  @%  %@@@@@@@@@@@@@@@@@%                                  
                                                 %@@@@@@@                                    @@@@@@%                                              %@@@@@@@@@@@@@@@@@@@@@@  @@@@     %@@@@@@@@@@@%                               
                                             *@@@@@@@%                                         %@@@@@@                                               @@@@@@@@@@@@@@@@@%  %@@@@          %@@@@@@@@@@                             
                                          %@@@@@@%                                               %@@@@@%                                                  %@%@@%@%      @@@@@              @%@@@@@@@@                           
                                       @@@@@@@%                                                    @@@@@@#                                                            %@@@@@                  %@@@@@@@@@                        
                                    #@@@@@@                                                          @@@@@@@                                                         %@@@@%                     #@@@@@@@@%                      
                                 *%@@@@@                                                               @@@@@@@                                                       @@@@@@                        @@@@@@@@@%                   
                               %@@@@@                                                                    #@@@@@@                                                    @@@@@@#                          %@@@@@@@@@%                
                             @@@@@@@@%                                                                     %@@@@@@@                                                @@@@@@@@                             %@@@@@@@@@@%@           
                           @@@@@  @@@@%                                                                      *@@@@@@%                                             @@@@@@@@%                                 %@@@@@@@@@@%        
                         @@@@@     %@@@@                                                                       @@@@@@@@                                          @@@@%@@@@                                       %@@@@@@@@%     
                       @@@@%        @@@@%                                                                        @@@@@@@@@                                     %@@@@@@@@@@                                           #@@@@@@@@# 
                    @@@@@           %@@@@%                                                                          @@@@@@@@@                                 @@@@@  @@@@%                                               %@@@@@@
                  @@@@@              %@@@@%                                                                           @@@@@@@@@@%                          @@@@@@%  %@@@@                                                     *%
                @@@@@                 %@@@@%                                                                             @@@@@@@@@@@@@@%@*            %@@@@@@@@%    @@@@@                                                       
             %@@@@#                    @@@@@#                                                                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     %@@@%                                                        
          @@@@@@                        @@@@@@                                                                                  %@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                                         
      @@@@@@@                             @@@@@                                                                                          *%@@%%%%@@#              @@@@                                                          
  %@@@@@%                                  %@@@@                                                                                                                 %@@%                                                           
@@@@%                                        @@@@@                                                                                                              @@@%                                                            
#@                                             @%@                                                                                                                                                                              
                                                                                                                                                                                                                                
  </span>
        `
        }
      }
    },
    lib: {
      type: 'dir', children: {
        'libfun.so': { type: 'file', content: 'Fun shared library for easter eggs' }
      }
    },
    media: {
      type: 'dir', children: {
        'coffee_cup.png': { type: 'file', content: 'ASCII coffee cup for devs' },
        'cool_duck.png': { type: 'file', content: 'Duck with a hat' }
      }
    },
    mnt: {
      type: 'dir', children: {
        'mount_here.txt': { type: 'file', content: 'Nothing mounted yet 😎' }
      }
    },
    opt: {
      type: 'dir', children: {
        'extras': { type: 'dir', children: { 'fun.txt': { type: 'file', content: 'Extra fun files' } } }
      }
    },
    proc: {
      type: 'dir', children: {
        'cpuinfo.txt': { type: 'file', content: 'Imaginary CPU: 9000 cores' },
        'meminfo.txt': { type: 'file', content: 'RAM: infinite' }
      }
    },
    root: {
      type: 'dir', children: {
        'secret.txt': { type: 'file', content: 'You are in root 😏' }
      }
    },
    run: {
      type: 'dir', children: {
        'session.tmp': { type: 'file', content: 'Temporary session data' }
      }
    },
    sbin: {
      type: 'dir', children: {
        'hack.sh': { type: 'file', content: 'Your fake hacking easter egg' }
      }
    },
    srv: {
      type: 'dir', children: {
        'games/': { type: 'dir', children: { 'play.txt': { type: 'file', content: 'Pretend game server' } } }
      }
    },
    sys: {
      type: 'dir', children: {
        'settings.sys': { type: 'file', content: 'System settings for fun' }
      }
    },
    tmp: {
      type: 'dir', children: {
        'random.tmp': { type: 'file', content: 'Temporary randomness' }
      }
    },
    usr: {
      type: 'dir', children: {
        'local/': { type: 'dir', children: { 'README.txt': { type: 'file', content: 'Local user stuff' } } }
      }
    },
    var: {
      type: 'dir', children: {
        'log.txt': { type: 'file', content: 'All logs go here' }
      }
    },
    special: {
      type: 'dir',
      children: {
        checkOutThisFolder: {
          type: 'dir',
          children: {
            followMe: {
              type: 'dir',
              children: {
                onceMoreISwear: {
                  type: 'dir',
                  children: {
                    'special.link': { type: 'link', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', description: 'RICK ROLL' }
                  }
                }
              }
            }
          }
        }
      }
    },
    home: {
      type: 'dir',
      children: {
        guest: {
          type: 'dir',
          children: {
            'about.txt': {
              type: 'file',
              content: "Jishnu Setia is a passionate Computer Science enthusiast specializing in software development, AI, machine learning, and computer vision. Proficient in Python, Java, JavaScript, HTML/CSS, SQL, and PHP, Jishnu has applied his skills to diverse projects, gaining hands-on experience building intelligent solutions.\n\nJishnu is experienced with cloud platforms, database management, and virtual machines, and he enjoys creating AI-powered and data-driven applications that solve real-world problems.\n\nDriven by curiosity and innovation, Jishnu is eager to explore new technologies and collaborate on projects that make a meaningful impact.\n\n"
            },
            'experience.txt': {
              type: 'file',
              content: `
Experience:

Intern                                                    July 2025 
Decoding Data Science                                    Dubai, UAE 
• Conducted workshops and managed event logistics                   
• Led the “n8n in 30” automation session                            

IT / AI Intern                                 May 2025 - July 2025 
Lamborghini Abu Dhabi & Dubai                            Dubai, UAE 
• Built AI-driven workflows and task management systems             
• Streamlined HR operations under Head of Digital Reforms           

Founder & CTO                                 March 2024 - May 2025
Student2Success                                          Dubai, UAE 
• Built a mentorship platform connecting students with seniors      
• Reached 100+ users; exploring relaunch                            

Co-Founder & CTO                            March 2023 - April 2025 
EunoKinetiX                                              Dubai, UAE 
• Co-founded an AI fleet management startup                         
• Led system architecture and full-stack development                
• Won AED 23K at Ru'ya; raised AED 8K via crowdfunding              
• Presented at GITEX, Intersec, and COP 28                          
• Project concluded after achieving major milestones                

Student Head of IT & Innovation Leader          Mar 2023 - Jan 2025 
GEMS Modern Academy                                      Dubai, UAE 
• Managed digital infrastructure for school-wide events             
• Led IT operations, training, and troubleshooting                  

Software Development Intern                             August 2024 
Numarck                                               Remote, India 
• Built automation scripts and internal web tools                   
• Improved workflows; received ₹10,000 INR stipend                  

Web Developer Intern                                      July 2024 
Junior Prince Mall                                    Remote, India 
• Developed and deployed the official mall website                  
• Enhanced online visibility with responsive UI                     

`
            },
            'education.txt': {
              type: 'file',
              content: `
<span class="ascii-logo2">
                                                                                     -+##@@@@%%%%%@@@%%%%%@@@@@#*+-                                                                                     
                                                                             =#@@@@@@@@@%#*+=--:        :--++*#@@@@@@@@@%*-                                                                             
                                                                     *@%%@@@@@@%*-                                    -*%@%@@@@%%%*                                                                     
                                                                -#@@@@@#%#=        -+#@@@@@@@@@@@@@@@@@@@@@@@@@@@%*+-        +%%#@@@@@#                                                                 
                                                           #*#@@@@#=      #%*#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**@*      =#@@@@#@*                                                           
                                                       +%%@@@%%=    =#@%@@@@@@@@@@@@@@@@@@@@@@@@%#*#*=*%%@@@@@@@@@@@@@@@@@@@@@@@%@*     *%%@@@@#                                                        
                                                    =#@@@#%     -#@@@@@@@@@@@@%**@@@@@@@@@@@@@#*%@@@@@@%= @@@@@@@# -+#@*#@@@@@@@@@@@@@#     **%@@@#-                                                    
                                                 %%@@@*    *%#@@@@@@@@@@@@@@@@@-%@@@@@@@@@@@@% #@@@@@@@@%  %@@@@@= %@@@@%@@@@@@@@@@@@@@@@@#@+   -#@@@#%                                                 
                                              #%@@%%    #@@@@@@@@@@@@%* %@@@@@%@@@@@@@@@@@@@@  @@@@@@@@@@= =@@@@@ -@@@@@@@@@@@@@@@@@%%@@@@@@@%@+   =%%@@@+                                              
                                            %@@%+    +@@@@@@@@@#  @@@@@@* +@@@=%@@@@@@@@@@@@@  @@@@@@@@@@+ -@@@@+ -*#@@@@@@@@@@@@@@@@  *@@@@@@@@@%=    +@@@#                                            
                                        -%@@@#   +#%@@@@@@@%**%@@@@@@@@@@%% %##@@@@@@@@@@@@@@+ *@@@@@@@@@= %@@@@  @@@@+@@@@@@@@@@@@@# +@@@@@@@@@@@@@%@=  +%@@@#                                         
                                      *%@@%*   #@@@@@@@#%+@@% %@@@@@@@@@@@@%* *@@@@@@@@@@@@@@%* %@@@@@@@# #@@@@# +@@@@@@@@@@@@@@@@@@- @@@@@@%*@@@@@@@@@@+   +%@@%=                                      
                                    +@@@+   #%@@@@@@@@@#@@@@@  %@@@@@@@@@@@@%=#%@@@@@@@@@@@@@@@#  *@@@@*+@@@@@@# @@@@@@@@@@@@@@@@@@@ +%@@@#  +@@@@@@@@@@@@#+   =@@%                                     
                                  #@@%*   #@@@@@@@%@@@@@@@@@@@+ #@@@@@@@@@@@@# %@@@@@@@@@@@@@@@@@@@%%@@@@@@@@@%@%%@@@@@@@@@@@@@@@@@# %@@%#@# #@@@@@%##@@@@@@@%   %%@@*                                  
                                %@@@*   @@@@@@@%+ +%@@@@@@@@@@%+ #@@@@@@@@@@@*=*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ #%-@@@+ %@@@@*%@@@@@@@@@@@%   *%@@*                                
                              #@@%   *%@@@@@@@@@@@ +%@@@@@@@@@@# =%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%# *@@@@@- @@@%#@@@@@@@@@@@@@@@%+   @@%%                              
                            #@@%*  %@@@@@@@@@@@@@@%- %@@@@@@@@@@# -%%@@@@@@@@@@@@@@%@%*=                       -=#@@%@@@@@@@@@@@@@%%@@@@@@@--@%*@@@@@@@@@@@@%%@@@@@%*  #@@@%                            
                           @@%*  :%@@@@%#=+#@@@@@@@@* %@@@@@@@@@@*@@@@@@@@@@@#*%        :=*#@@@@@@@@@@@@@@@%#+=        *@*#@@@@@@@@@@@@@@@@  =@@@@@@@@@@@*# @@@@@@@@@#   *@@%                           
                         %@@%  %@@@@@@%#@@@@@@@@@@@@@% #@@@@@@@@@@@@@@@@@#     +%%#%@@@%*+:                  -+#%@@@%#%#+     #@@@@@@@@@@@#+%@@@@@@@@@+%%@% #@@@@@@@@@@#   %@@#                         
                       +@@%   %@@@@@@@##@@@@@@@@@@@@@@%  %%@@@@@@@@@#%*    *%%@%@#=                                  +%@%@%@*    +#%@@@@@@@@@@@@@@%*#*%@@@ +@@@@@@@@@@@@@*  =%@%                        
                      @@@=  *@@@@@@@@@@#        *%@@@@@@%@@@@@@@@*     =@@%+                                                +@@%+    -#@@@@@@@@@ =@@@@@%= -@@@@@@@@%-@@@@@@=  #@@%                      
                    =%@%   %@@@@@@@@@@@@@%###%%#@ @@@@@@@@@@@%%+  =%%@@*                                                       -#@@%#   *%@@@@@@@@@@@@@@+ %@@@@@@@@@@%#@@@@@%   %@%+                    
                   %@@*  %@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@%*   #@%@*                                                              ##@@+   *%@@@@@@@@@@# #%@@@@@@@@@@% %@@@@@@+  #@@*                   
                  %@@   *@@@@@#=+@@@@@@@@@@@@@@@%+@@@@@@%=   #%@+                                                                      #@%*   -@@@@@@@%+ #@@@@@@@@@#  *@#-@@@@@@  -@@@                  
                +%@#  *@@@@@%#@@# %@@@@@@@@@@#-#%@@@@@@+  #%@@+                                                                          #%@##  *%@@@@@@@#@@@@@@@#  #@@@@@=%@@@@%-  %@%                 
               #@@*  %@@@@@*%@@@@@+@@@@@@@@@@@@@@@@@%   *@%*                                                                                #@@=  +%@@@@@@@@@@@#  #@@@@@@@%@@@@@@@#  %@@=               
              %@@-  *@@@@%%+ *@@@@@--      *@@@@@@#   #%%                                                                                      @%#  -@@@@@@%#+  %@@@@@@@@@@@@@@@@@@#  *@@#              
             #@%#  %@@@@@@@@@# #%%+%%%%%%%@@@@@@%*  #@%*                                                                                        %%@%  #@@@@@@##@@@@@@@@@@@@@@%*@@@@@#  *@@=             
            #@@=  %@@@@@@@@@@@@*  #@@@@@@@@@@@%   =@%+                                                                                            *%%   +@@@@@@@@@@@@@@@@@@#  - %@@@@@  *@@+            
           %@@-  #@@@@@@@@@@@@@@@#* +@@@@@@@@%  #@@=                                                                                                *@%#  %@@@@@@@@@@@@@#  ##@@@##@@@@#  +@@#           
          +@%   @@@@@*%@@@@@@@@@@@@@%-@@@@@%+  #@#    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-     %@+  %@@@@@@@@%%= -%%@@@@@@=%@@@@%  +@@@          
         =@%*  @@@@@=#@@@@%%@@@@@@@@@@@@@@%  =@@      #@#                                                                                    -@@-      =@@   %@@@@@-  +@@@@@#@@@@@@@@@@@%  %@@          
        *@@#  %@@@@#-@@@@@*%@@@@@@@@@@@@@#  #@#       %@#  =+  =            #@*-=@                                        +%%=       @@@@%*  -@@-        %%*  %@@@@@#@@@@@@%%@@@@@@@@@@@@%  %@@=        
       *%@*  +@@@@%#-  *#*@@@@@@@@#@@@@%+  @@#        *@@ #%@@*@@-      #@@@*%@@@#           *@@@@@@#-         #@=     %@@%+#@@@@@--@@@@@@@- -@@-         #@#  *@@@@@*#@@@@@@@@@@@@@@@@@@@-  #@@        
       *@#  +@@@@@@@@@%*#  =%@@@%*@@@@@= +%%          +@@ +*@@@@@-         #@@@@@ ++       +@@@@@@@@@@@@@%#-%#*@@@  %%@+* *@@@@@*  +@@@@@@@  +@@           -@@  #@@@@@*#@@@@@@@@@@@@%+@@@@@   %@%       
      +@%* +@@@@@@@@@@@@@@@*  -=%@@@@%- -%%           +@@  #%%@@@#  *@@@@%+@@@@@@ @%*    +%@@@@@@@@@@@@@%%  =%@@@@# *%%%#-*@@@@%+%%=@#  %@#  +@@            #%%  *@@@@@@@@@@@@@%@*  =#+@@@@@  %@@-      
     -@@#  %@@@%+@@@@@@@@@@@@@+#@@@@#  =@#            +@@     +@@@@     #%@@@@#*=@@@*    #@@@#%@*%@++#+      @@@@@@*   %@@@@%#=%@@@ @#  @@   +@@              @@   @@@@@@@@#%*   #@@@@%%@@@@@  %@@      
     @@%  *@@@@%#+#@@@@@@@@@@@@@@@@%* *@*             +@@      =%@@%#+       +%%@@@@*   #@@%                :**  *@@@@@+   ##@@@@@@ =+ *@-   +@@               %@* %@@@@@+ #@#@##@@@@@**%@@@@%  @@#     
    %@@   @@@@@@@@%*%@@@@@@@@@@@@@@*  %%              +@%        %@@@@@@#- #@@@@@@@@*   +@%  +              =#+   *#@@@@=@@@@@@@@@#    @+++  +@@                %%  #@@@@@%@@@@# %%@%= #@@@@@#  +@%*    
    #@*  #@@@@@@@@@@@=*@@@@@@@@@@@=  %@               +@%  #@@*     #@@@=@@@@@@@@@@#     @%=@@*            -@@%%     ++#@@@@@@@@@@    #@@%   #@%                *%+  *@@@@@@@@% *@@@@@@@@@@@@@=  *@%    
   =@%* +@@@@@@@@@@@@@@@*@@@@@@@@*  #@-               =@% #@@@@%        %@@@@@@@@@@%     %@@@#           %@@#@@*      *@@@@@@@@@@#    @@@@   #@#                 *@*  #@@@@@@* #@@@@@@@@@@@@@@@   @@    
   %@@  @@@@%#%%@@@@###+= @%@@@@%* %@+                +@% =*@@@@@@@@@@# %@@@@@@@@@@%    #@@@@#           @%#@@@@%      %%@@@%==+@*    @@@%   #@#                  *@+  %@@@@* %@@@@@@@@@@@@@@@@#  %@*   
  =@@= *%@@@@    *+++*#%@@@@@@@@# *%#                  @#  @@@=@@%%@@@% @@@@%+  -++    @#%@@@*            %@@@##@@@@#+=-**+#@@@@%     *@@%+  @@*                   #@  @@@@@%@@@@@@@@@@@@@@@@@@%= #@@   
  %@%  %@@@@@@@@@@@@@@@@@@@@@@@@  *%*                  @#               # %%@@@@@@@*      -@@             *%#   +%@@@@@=%@@@@@@@#     -@@#   @@+                   %@% -@@@@@%@@@@@@@@@@@%@#@@@@@  @@*  
 =@@=  #@@@@@@@@@@@@@@@@@@@@@@@-  @%                   %%                 *@@@@@@@@%#     +@+                      *#@@*#@@@@@@@@    @@@@    @@=                    @%  *@@@@@@@@#*@@#     +%@@@#  #@@  
 #@@   @@@@@@@@@@@@@@@@@@@@@@@#  #@-                   %%     %#@    +@@@@%+ -#@@@@@@*#  %@*                            - +@@@@@@#  +@%%@*  -@@-                    +@=  @@@@@=  +#@##%@@@@@@@@@%  -@@+ 
 @@*  +@@@@+%@%%%@@@@@@@@@@@@@* -@*                    #@     @@@@   @@@@%+#%@%%@@@@@@@%%%%                                 %%@@@@#  #  #%  +@@                      %@  =@@@@@#@@@@@@@@@@@@@@@@@-  %@% 
 %@-  %@@@%--       +#@@%%@@@%  #@                     #@+  #@@@@@%  #@@%*#@@@@@@@@@@@%          %@@#                   #@@@# @@@@@%    @%# *@@                      =@+  @@@@@*@@@@@@@@@@@@@@@@@*  +@@ 
#%@   @@@@@@@@@@@@@%##%%%@@@@%  @#                     %@+  @@#@@@@@@@@@@##@@@@@@@@@@=        +#@@@@@@%%        *@@%    @@@@% %%@@@@%   %%# #@#                       @%  #@@@@#@@@@@@@@@@@@@@@@@%  -@%=
@@%  +@@@@@@@@@@@@@@@@@@@@@@@@ +%*                     @@+    #%## *%#=    #@@@@@@%         %%@@@@@@@@@@@*     *@@@@%   @@@#%@@@@@@@@@@%@#  @@+                       #@  %@@@@@@@@@@@@@@@@@@@@@@@   @%#
*@#  *@@@@@@@@@@@@@@@@@@@@@@%* #@@                     #@#                     +@@@@#     =@@@@@@@@%@@@@@@@#    +%@@@@@@@@#*@@@@@@@@@+      %@-                       =%+ @@@@@@@@@*:    =#@@@@@@@-  %@%
*@#  #@@@#@@@@@@@@@@@@@@@@@@%= @%#                     +%@             *@%%++%%@@@#     %%@@@@@@%%   @@@@@@@@%%  ##+%%@*==*+@@@@@@@@@%     +%@                         @# #%@@@@@%  *@%%%@*-%@@@@@+  #@@
*@%  @@@@# --+++++*#-  %@@@@@- %%*                      @@=           *@@@@@@@@*      %@@@@@@@#+       *@@@@@@@@=           *%#####%@@@@=  %@%                         @% +%@@@@+%@@@@@@@@@@#+@@@@*  #@%
*@%  @@@@%@@@@@@@@%# %@@@@@@@  #%+                      @@#          =@@@@@@@*     %#@@@@@@@%             %@@@@@@@%                  @@@#  @@#                         %@ +%@@@##@@@@@@@@@@@@+%@@@#  #@#
*@@  @@@@@@@@@@@%* *%@@@@@@@@  #%+                      *@@           -@@@+%#    =@@@@@@@@#                =@@@@@@@@%*         #@@%  @@@   *@@                         %@ +%@@@##@@@@@@@@@@@@**@@@#  #@*
*@%  @@@@@@@@@@# *%@@@@@@@@@@  #%+                      -@@=           **      #@@@@@@@%@         -+          *@@@@@@@@        *#@@*@@@#   %@#                         %@ +%@@@%+@@@@@@@@@@@%*%@@@#  #@#
*@#  @@@@@@@@* *#@@@@@@@@@@@@  #%+                       #@%                 *@@@@@@@@+         *@@@@#          *%@@@@@@%#    *%@@@@@@#   -@%=                         %@ +%@@@@##@@@@@@@@@* *@@@@*  #@#
*@#  #@@@@@## %@@@@@@@@#@@@@%= @%#                       =@%               %@@@@@@@%*         %%@@@@@@@%#         +%@@@@@@@%=   +@@# *#   #@%                          @# #%@@@@@@#  ---   %%@@@@@+  #@@
*@#  #@@@#              @@@@%+ #@@                        %%%           -%@@@@@@@+          *@@@@@@@@@@@@@=          *@@@@@@@%           -@@=                         =%+ @@@@@@@@@@@%*+*@@@@@@@@@=  %@@
@@%  +@@@@@@@@@@@@@@@@@@%@@@@% +%*                        #@*         %%@@@@@@@%         ##@@@@@@@%#@@@@@@@%%          #@@@@@@@%*        #@%                          *@  @@@@@@@@@@@@@@@@@@@@@@@@   @%#
#%@  -@@@@@@@@@@@@@@@@@@@@@@@%  @#                        %@@       *@@@@@@@%*         -@@@@@@@@#    %%@@@@@@@#          *#@@@@@@@%     =%@=                          @@  #@@@@@@@%####@@@@@@@@@@@  -@%+
+%@:  @@@@@@@@@@@@@@@@@@@@@@@#  %@                         @@+    #@@@@@@@%-         *%@@@@@@@*         @@@@@@@@%+          %@@@@@@@*   @@#                          -@+  %@@@@@-        *@@@@@@@#  +@@ 
 %@+  *@@@@%@%@%+  *#@@+%@@@@@  =@+                        *@@-=@@@@@@@@%*         %%@@@@@@%*             #@@@@@@@%#          #@@@@@@@%+#@#                          %@  =@@@@%=@%@@@@@@%# %@@@@@=  %@@ 
 %@%  -@@@@+=*@@@@@@@@@@@*@@@@*  %@                         %@@@@@@@@@%-         =@@@@@@@@*      %@%@@@@@   @@@@@@@@@#          ##@@@@@@@%+                         =@+  %@@@@#@@@@@@@@@@@@+%@@@@  -@@+ 
 +@@-  %@@@@@@@@@@@@@@@@@@@@@@@  -@#                         @@@@@@@*          #@@@@@@@#      *@@@@%@@@%+     =@@@@@@@@##          %@@@@@*                          @@  +@@@@#%@@@@@@@@@@@@%@@@@#  *@@  
  @@%  *@@@@@@@@@@@@@@@@@##@@@@%  *%+                        *@@@@#          %@@@@@@@%=    @%%%%#@@@@@@#%@=      %@@@@@@@%+          #@@%                          #%#  @@@@@#%@@@@@@@@@@@@*%@@@@  @@#  
  =@@- %@@@@@@@@@@@@@@%**=@@@@@@* #%%                         #@+          #@@@@@@@%    =@#+@@#=%@@%##*@@@=        %@@@@@@@@#        %@@                           #%+ %@@@@@@+*@@@@@@@@@@+%@@@%+ *%@   
   @@%  %@@@@%@@#+-    #%@@@@@@@%  @@-                        *@@+      %%@@@@@@@+  =@@@*@@+   =-%%%@@@@@@- *@@@@%#  *@@@@@@@@#*     %@                           +@#  %@@@@@@@#  +#@@@#+ #@@@@%  @@#   
   =@%+ *@@@@+  -*%@%@@@@@@@@@@@@*  @%                         *@@=   =@@@@@@@%%     #%@@@@@@%#+@@@@@@@@@# -@@@@=#@#   #%@@@@@@@@-  %@%                          =@#  *@@@@@@@@@@@+    =#@@@@@@=  %@#   
    #@%  %@@@#@@@@@@@@@@@@@@@@@@@@   @@                         +@% #%@@@@@@%*  -+=  @@@=#@@@@#@@@@@@@@@@=  %@@@@@ @#     +@@@@@@@%#@@                           @#  =@@@@@@@@@@@@@@@@@@@@@@@@*  +@#    
    @@%  -@@@@@@@@@@@@@@@@@@@@@@@@@   @%                         %@@@@@@@@@-   =%@@#     +=  #%%@@@@@@@@@-   #@@@%#+@=      #@@@@@@@@                           %%  *@@@@@@@@@@@@@@@@@@@@@@@@%  =@@#    
     @@*  *@@@@@@@@@@@@@@@@@@@@@@@@%= #%+                        *@@@@@@#%   :@@@@@@@*=        =*+@+%@@@@-    %@@  *@+        *@@@@%                           #@* *%@@@@@@@@@@@@@@@@@@@@@@@@#  @@%     
     +@@+  #@@@@@@@@@@@@@@@@@@@@@@@@#  *@+                         @@@*       %%@@@%@@@@@@@@@%@@@@@@#%@%*@    ##   #@@@%-       =@@#                          #@-  #@@@@@@@@@@@@@@@@@@@@@@@@%  #@@      
      *@%+ #@@@@@@@@@@@@@@@@@@@@@@@@@#  +@%                         %@#        *%%% @*  =%%@@%*@@@@@@%*%*       =%@@@@*        #@@*                          %%-  %@@@@@@@@@@@@@@@@@@@@@@@@@+ #%@=      
       #@#  #@@@@@@@@@@@@@@@@@@@@@@@@@@  #%#                        *%@*                    +%++#@@@@@@@%     %@@@@@@@+       %@@+                          %@* +%@@@@@@@@@@@@@@@@@@@@@@@@@+  #@#       
       %%@+  #@@@@@@@@@@@@@@@@@@@@@@@@@%  -@%*                        @@%                  #@@@@#* +%@@@@     %+ #@@%        *@%#                         *@%   %@@@@@@@@@@@@@@@@@@@@@@@@@=  *@%+       
        #@@+  #@@@@@@@@@@@@@@%@@@@@@@@@@%=  %@%                        #@%         #%@#    @@@@@@%+@%%@@@=       *@+        %@%+                         *@#  #@@@@@@@@@%%@@@@@@@@@@@@@@@%  #@@*        
         *@@= =%@@@@@@@@@@# *@@#%@@@@@@@@@%  #@*                        %@@=       +%@%+    #@@@%*@@@@@@@@=     @%%       %%@+                          %@+  %@@@@@@@@@@==@%%@@@@@@@@@@@@  #%@=         
          *@%  =@@@@@@@@@##@@@@@%#@@@@@@@@@#   %@#                       =@@%     %@@@@@@@@@@@@@%+@@@@@@@@@%*##%@+       *@@%                         #@%  =#@@@@@@@@@@@@@###@@%%@@@@@@@   %@*          
           %@%  -%@@@@@@@*@@@@@@@*@@@@@@@@@@@#  *@%                        %@@+   +=@@@%@%@@@%%++= %@@@@@@#            %@@#=                         @@*  %@@@@@@@@@@#@@@@@@@%*@@@@@@@%  -%@%           
            @@@  *%@@@@@@%%@@@@@@@@@@@@@@@@@@@#   *@%                        @@%=   @#=               *@@@@%:         %@%#                         %@=   %@@@@@@@@@@+ *@@@@@@@@@@@@@@%  =@@#            
             %@%# =%@@@@@@@#%@@%*@#@%#@@@@@@@@@@#  *#%%                       +@@#=               =%%+  =@@@@%      %@@%                        =#@#  *#@@@@@@@@@@*%@@%%#%@@@@@@@@@@%  #%@*             
              #@@   #@@@@@@@@@##@@@@@@*@@@@@@@@@@@+  *#@#                       #@@#*           #@@%@@+ +@@%=     %@@%                         #@#=  *@@@@@@@@@@@@@@@@@@@+*%@@@@@@@#  -@@%              
               @@@+  #@@@@@@@@**@@@@@@=@@@@@@@@@@@@@+   %@##                      #@@@*        *@@@@@@@@@@@    ##@@*                        +%@%   #@@@@@@@@@@@@+-*@@@@@@@@@@@@@@@%  *@@#               
                #@@#  #@@@@@@@@%@@@@@-#@@@@@@@@@@@@@@%%   #@%#                      +%@%%        %@@% *%%    *@@%%                        %%@#   @@@@@@@@@@@@%@@@#@##*=#@@@@@@@@@*  #@@=                
                 *%@#   %@@@@@@@@%+*%@@@*+@@@@@@@@@@@@@@#   %#@#                      %*@@%+    =#**      +%@@%+                       -%@##   #@@@@@@@@@@@#@@@@@%*@@@@@@@@@@@@#   %@%+                 
                  -%@@*  %@@@@@@@@@@@@%*@+@@@@@@@@@@@@@@@@@*   +@@%#                     +%@@%#        ##@@@=                       %%@%-   *%@@@@@@@@@@@%%#+%@@@@%*@@@@@@@@@@%  *@@%                   
                    %@@*  *%@@@@@@@@@=@@@##@@@#%@@@@@@@@@@@@@@+   %%@@#                     *%@@@#  #@@@%%                      -#@%%#   #%@@@@@@@@@@@@@@@@@@%%@@@@%@@@@@@@@%=  #@@*                    
                     +%@@   %@@@@@@@@@@@@##@+%@@@%%@@@@@@@@@@@@@#     +%@%=                    *#@@@@##                      +@@%+    =%@@@@@@@@@@@@@@*+@@@@@@@ #@@@@@@@@@@#  =@@@                      
                       #@@#  -@@@@@@@@@@@%*%@@% #@@@%%@@@@@@@@@@@@@%@*    *@@@#@#                                     -#%%@@%+    *%%@@@@@@@@@@@@@@@@@@% %@@@@@@@@@@@@@@@%   %@@*                       
                        *%@@=  *@@@@@@@@@@@@@%*%@@@@@@*@@@@@@@@@@@@@@@@@#=    +%##@@@@#=-                      -+#@@%@##%=    +#@@@@@@@@@@@@@@@%@@%%%@@@@##@@@@@@@@@@@@@#  *@@@%                        
                          +@@#   =@@@@@@@@@@@%*@@@@@@@@@++*%@@@@@@@@@@@@@@@@#*        -+*%@@@@@@@@@@@@@@@@@@@@%*=-        +#@@@@@@@@@@@@@@@@@@@@+%@%%@@@@@%%@@@@@@@@@@    #@@                           
                            #@@%=  #@@@@@@@@@@%*@@@@@@-#@@@@%#@@@@@@@@@@@@@@@@@@@%%@#=                            +#@%%@@@@@@@@@@@@@@@@@@%*@@@@@@*+#%@#=*@@@@@@@@@@@%  *#@@#                            
                             *#@@+   #@@@@@@@@@@@##@@# @@@@@@ %@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@##*++++++*#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#@@@#@#%@@@%#@@@@@@@@@@@@@@%   *@@#=                             
                               *%@@#   #@@@@@@@@@@@@@#*@@@@@*#%@@-%@+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@##@@@*%@@@@@@%@@@@@@@@@@@@+   %@@%                                
                                 =@@@%   *@@@@@@@@@@@@@#%%%##@@@=%@@=@@@@*#%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*%@##@@@@+%%#%@@@@@@@@@@@@%%  =@@@%                                  
                                    %@@#   **@@@@@@@@@@@@@@@@@@@=@#@@@@@@+@@@#%%@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%@@@@@@@@=%%#@@@@@@@@@@@@@@@@@@@#    %@@*                                    
                                      #@@@#   =@@@@@@@@@@@@@@@@*@@%+@@@@=@@@@@+%@@@=@@@@@*@@@@@@@@@@%%%#@@%+@@@@%@@@@-@@@@=*@@@@@@@@@@*#@@@@@@@@@@@@@@@@@-   #@@@%                                      
                                        #%@@@+   %%@@@@@@@@@@@@@@@@*%@@*%@@@@@=@@@*@@@@@+#%@@@@@@@*%@@@@@@%*%@@@@%@@@%+#@%#@*%@@@@@@@@@@@@@@@@@@@@@@@#%   *%@@@+                                        
                                           +@@@+    +%@@@@@@@@@@@@@@@@@+*@@@@%#@@@=%@@@*@@-@@@@@@# @@@@@@@@%+@@@@+@@@#@@:=@@# @@@@@@@@@@@@@@@@@@@@%-    *@@@-                                           
                                             +%@@%%=   *%%@@@@@@@@@@@@@@@@@@@@@@@*%@@@#@@@@#@@@@@# %@@@@@@@%-@@@@*@@@*@@@%@@@@@@@@@@@@@@@@@@@@%%+   +@@@@%-                                             
                                                *%@@@#     %%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#=@@@@@@@+#@@@#@@@@+###@@@@@@@@@@@@@@@@@@@@@@@@@@#%    -%@@@##                                                
                                                    #@@@%#     =#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*:     +%@@@#                                                    
                                                       *%@@@%%=    -#@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@#     +%%@@%%*                                                       
                                                          *##@@@@#=     +%%*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@#      *%@@@@#%+                                                          
                                                               =#@@@@%#@#        -*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+-        #%#@@@@@*                                                                
                                                                    *@%%@@@%@@*=            --=++++++++++=--            =#@@%@@@%%%+                                                                    
                                                                           **%@@@@@@@@#*=-                    :++#@@@@@@@@%**                                                                           
                                                                                   =*%@@@@%@@@@@@@@@@@@@@@@@@%@@@@#+=                                                                                   
</span>
University of Waterloo - Waterloo, Ontario
BCS, Honours Computer Science (Co-op)
2025-2030
• Focus: systems, software engineering, AI

<span class="ascii-logo2">
                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
                         @@@@                                                                                                                                                             @@@@                         
                         @@@@                                                                                                                                                             @@@@                         
                         @@@@                                                                                                                                                             @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@       @@@@  @@@@@  @@@@        @@       @@@  @@@@@@@@  @@@@@@@@       @@@   @@@@@@  @@@        @@@  @@@@@@@  @@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@  @@@@@@@@@@  @@@  @@@@ @@@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@ @@@@@@@@@ @  @@@@@  @@@@@@ @@@@@@@  @@@@@@ @  @@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@  @@@@@@@@@@@  @  @@@@  @@@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@ @@@@@@@@@ @@@ @@@@  @@@@@@ @@@@@@@  @@@@@ @@@ @@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@      @@@@@@@@   @@@@@  @@@@@@@@@@      @@@@  @@@@@@@@  @@@@@@@@      @@@@ @@@@ @@@  @@@@@@ @@@@@@@  @@@@  @@@@ @@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@  @@@@@@@@@@@  @  @@@@  @@@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@ @@@@@@@@@ @@@@@ @@  @@@@@@ @@@@@@@  @@@@        @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@  @@@@@@@@@  @@@@  @@@@  @@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@ @@@@@@@@@ @@@@@@ @  @@@@@@ @@@@@@@  @@@ @@@@@@@ @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@       @@@  @@@@@@   @@@       @@@        @@       @@@       @@@       @@@ @@@@@@@   @@@@@@ @@@@@@@  @@  @@@@@@@@ @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@                                                                                                                                                             @@@@                         
                         @@@@                                                                                                                                                             @@@@                         
                         @@@@                                                                                                                                                             @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@               @@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             @@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@             @@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@                  @ @@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                    @@ @@@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                      @@@@  @@@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       @@@@@   @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        @@@@@@@   @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         @@@@@@@    @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        @@@@@@@@@@     @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         @@@@@@@@@@      @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        @@@@@@@@@@@@       @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        @@@@@@@@@@@@@        @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       @@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                            @@@@@@@@@@@@@@@@@@@@@@@@@@@                      @@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                             @@@@@@@@@@@@@@@@@@@@@@@@@                     @@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                               @@@@@@@@@@@@@@@@@@@@@@                    @@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@      @@@@                         
                         @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                                @@@@@@@@@@@@@@@@@@@@                    @@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@      @@@@                         
                          @@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                                  @@@@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@      @@@                          
                          @@@      @@@@@@@@@@@@@@@@@@@@@@@@@@                                   @@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@      @@@                          
                          @@@       @@@@@@@@@@@@@@@@@@@@@@@@@                                    @@@@@@@@@@@@@@                  @@@@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@@@       @@@                          
                          @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@                                     @@@@@@@@@@@@                 @@@@@@@@@@@@@@@                  @@@@@@@@@@@@@@@@@@@      @@@@                          
                          @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@                                      @@@@@@@@@@@                 @@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@@@@@      @@@@                          
                           @@@       @@@@@@@@@@@@@@@@@@@@@@@@                                        @@@@@@@@                 @@@@@@@@@@@@                    @@@@@@@@@@@@@@@@@@@@       @@@                           
                           @@@@      @@@@@@@@@@@@@@@@@@@@@@@@                                         @@@@@@@                @@@@@@@@@@@                     @@@@@@@@@@@@@@@@@@@@@      @@@@                           
                            @@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@                                    @@@@@@@                @@@@@@@@@                     @@@@@@@@@@@@@@@@@@@@@@       @@@                            
                            @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                               @@@@@                 @@@@@@@                      @@@@@@@@@@@@@@@@@@@@@@@      @@@@                            
                            @@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                            @@@@                @@@@@@                      @@@@@@@@@@@@@@@@@@@@@@@@       @@@@                            
                             @@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@                        @@@@                @@@                        @@@@@@@@@@@@@@@@@@@@@@@@@      @@@@                             
                              @@@       @@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@                       @@@                                         @@@@@@@@@@@@@@@@@@@@@@@@@@       @@@                              
                              @@@@       @@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@@@@@                    @@@                                       @@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@                              
                               @@@@       @@@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@                 @@@                                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@                               
                                @@@        @@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@               @@@                                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@                                
                                 @@@        @@@@@@@@@@@@@@@@@@@@@@                    @@@@@@             @@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@                                 
                                 @@@@       @@@@@@@@@@@@@@@@@@@@@@                      @@@@@@           @@@                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@                                 
                                  @@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@                  @@@@@@         @@@                             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@                                  
                                   @@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              @@@@@       @@@                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                   
                                    @@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@      @@@                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                    
                                      @@@        @@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@        @@@@     @@@                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                     
                                       @@@@       @@@@@@@@@@@@@@@@@@@@@@@         @@@@@@@@@@      @@@@   @@@                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                      
                                        @@@@        @@@@@@@@@@@@@@@@@@@@@              @@@@@@@@    @@@@  @@@                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                        
                                         @@@@        @@@@@@@@@@@@@@@@@@@@                  @@@@@@   @@@@ @@@                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                         
                                          @@@@        @@@@@@@@@@@@@@@@@@@                     @@@@@  @@@@@@@               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                          
                                            @@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@  @@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                            
                                             @@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@                                             
                                              @@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@                                              
                                                @@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@                                                
                                                 @@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@                                                 
                                                   @@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@                                                   
                                                     @@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@                                                     
                                                       @@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@                                                       
                                                        @@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@                                                        
                                                          @@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@                                                          
                                                            @@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@                                                            
                                                              @@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@                                                              
                                                                @@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@                                                                
                                                                   @@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@                                                                   
                                                                     @@@@@           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@                                                                     
                                                                       @@@@@@           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@@                                                                       
                                                                          @@@@@           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@                                                                          
                                                                            @@@@@@           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@@                                                                            
                                                                              @@@@@@@           @@@@@@@@@@@@@@@@@@@@@@@           @@@@@@@                                                                              
                                                                                 @@@@@@            @@@@@@@@@@@@@@@@@            @@@@@@                                                                                 
                                                                                    @@@@@@            @@@@@@@@@@@            @@@@@@                                                                                    
                                                                                       @@@@@@             @@@             @@@@@@                                                                                       
                                                                                         @@@@@@@                       @@@@@@@                                                                                         
                                                                                             @@@@@@                 @@@@@@                                                                                             
                                                                                               @@@@@@@           @@@@@@@                                                                                               
                                                                                                   @@@@@@@   @@@@@@@                                                                                                   
                                                                                                      @@@@@@@@@@@                                                                                                      
                                                                                                         @@@@@                                                                                                         
</span>
GEMS Modern Academy - Dubai, UAE
High School Diploma
2021-2025
• Student Leader for Innovation & Entrepreneurship
• Head of IT for multiple school events and projects

`
            },
            'awards.txt': {
              type: 'file',
              content: "\nUniversity of Waterloo - Waterloo, Ontario\n• President's Scholarship, Aug 2025\n\nGEMS Modern Academy - Dubai, UAE\n• Best Pupil Award 2024-25, May 2025\n• Sanjay Gupta Award for Innovation & Entrepreneurship 2023-24, May 2024\n• 1st Place - Project Prism (Innovation & Entrepreneurship), Nov 2023\n• 2nd Place - GMA Hackathon, Aug 2022\n• 2nd Place - HackAProb, Aug 2020\n\nGEMS Our Own English High School - Sharjah, UAE\n• 3rd Place - Innotech Interschool Digital Fest (Web Design), Oct 2024\n\nDecoding Data Science - Dubai, UAE\n• Top 20 Winner - Building AI Applications Challenge, Jun 2025\n• Weekly Hackathon Winner, Feb 2024\n\nRu'ya Next Founders - Dubai, UAE\n• 1st Place - Ru'ya Careers Next Founders Competition, Sep 2023\n\nCurtin University - Dubai, UAE\n• Semi-Finalist - Hackathon, May 2023\n\nNASA Space Apps - Dubai, UAE\n• Top 48 UAE - NASA Space Apps Challenge, Oct 2022\n\nDrone In Schools - Dubai, UAE\n• Finalist - Teens' Next Big Idea Global Drone Competition, Jun 2021\n\n"
            },
            'publications.txt': {
              type: 'file',
              content: `\nInternational Journal of Innovative Science and Research Technology (IJISRT)\n• “Explainable AI: Methods and Applications”, Vol. 8, Issue 10, 2023\n  <span class="link" onclick="window.open('https://ijisrt.com/explainable-ai-methods-and-applications', '_blank')">https://ijisrt.com/explainable-ai-methods-and-applications</span>\n\nInternational Journal of Innovative Science and Research Technology (IJISRT)\n• “Revolutionizing Logistics and Fleet Management: The Impact of EunoKinetiX on Operational Efficiency and Societal Dynamics”, Vol. 9, Issue 9, 2024\n  <span class="link" onclick="window.open('https://www.ijisrt.com/revolutionizing-logistics-and-fleet-management-a-comprehensive-analysis-of-the-impact-of-eunokinetix-on-operational-efficiency-and-societal-dynamics', '_blank')">https://www.ijisrt.com/revolutionizing-logistics-and-fleet-management-a-comprehensive-analysis-of-the-impact-of-eunokinetix-on-operational-efficiency-and-societal-dynamics</span>\n\n`
            },
            'skills.txt': {
              type: 'file',
              content: "\n<span class='info-label'>Frontend:</span> HTML, CSS, JavaScript\n<span class='info-label'>Backend:</span> Node.js, PHP, SQL, Java\n<span class='info-label'>Programming Languages:</span> C, Python, Java, JavaScript, PHP, SQL, HTML, CSS, Shell scripting, Lean 4, Racket\n<span class='info-label'>Frameworks & Libraries:</span> Node.js, Machine Learning (scikit-learn, OpenCV)\n<span class='info-label'>Databases:</span> MySQL, PostgreSQL, Google Firebase\n<span class='info-label'>AI & Automation:</span> Machine Learning, Generative AI, Explainable AI, Agentic AI, AI Automation, Computer Vision, Regression\n<span class='info-label'>DevOps & Cloud:</span> Git, Docker, Linux, AWS, Oracle Cloud Infrastructure (OCI), Virtualization, VMWare, VirtualBox, UTM, CI/CD, n8n\n<span class='info-label'>Developer Tools:</span> JetBrains Suite, Visual Studio Code, Eclipse, Xcode\n<span class='info-label'>Operating Systems:</span> Linux, macOS, Windows\n<span class='info-label'>Tools & Platforms:</span> Wordpress, Microsoft Office, Adobe Photoshop, Filmora, iMovie\n<span class='info-label'>Other:</span> Game Development, Leadership, Robotics, Research, Software Architecture, System Design, Arduino, Artificial Intelligence, Computer Vision\n\n"
            },
            '.secret': {
              type: 'file',
              content: `
🔒 You found the secret file!

<span class="ascii-logo2">
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@%                                                                                                                                                                                                                                                                                           @@@
@@                                                                                                                                                                                                                                                                                              #@
@@      #@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#        %%##      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@         #@@@          ##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@      #@
@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#      #@@@#     #%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    #@
@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#        @@@       #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@ @@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@%          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@
@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@       #@@@#     #%@@@@@@@@@@@@@@@@@@@@@@@ @@%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@ @@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       #@@@@@        #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@
@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         %@@@#     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@ %@@ %@@@@@@@@@@@@@@@@@@@@@%@@@%%#                   #@@@ @%@ %@% @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       #@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@
@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#       @@@%      #@@@@@@@@ @@@@@@@@@@@@@@@@@@@@ @@##@@  @@@@@@@@@@##                                                %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@    @@
@@     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#          #     %%@@@@@@@@@@@@    %@@@@@@@@@@@@@@@@ #@% @@  %@@#                                                              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%      @@@@@@      @@@@@@@@@@@@@@@@@@@@@@@#    @@
@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     #@@%       %@@@@@@@@@@@@@@@@@#       @@@@@@@@@@@@@ #@@ #%        #@@@@     @@@                                                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@#     %@@@@@@@@@@@@@@@@@@@@*    @@
@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%      @@@@@         @@@@@@@@@@@@@@@@@@@@           @@%@@@@@            @@@@@@@     #@@@@                                                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      %@@@#      @@@@@@@@@@@@@@@@@@#    @@
@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%     #%@@@@    ##        %@@@@@@@@@@@@@@@@@@@                            @@@@@@@@%    @@@@@@@          @%@                                          #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@       @@@@@@@@@@@@@@@     @@
@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#     #@@@@     #@@@           %@@@@@@@@@@@@@@@@@@@#                       @@@@@@@@@#    @@@@@@@@#         %@@@                                            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% %@@%     %@@@@@      @@@@@@@@@@@@@     @@
@@=    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#    #@@@%#    #@@@@@@@                @%@%%@@%%%#@%                        @@@@@@@@@@@    @@@@@@@@@@         @@@@@                                             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#% %@@@@@@@      @@@@@      @@@@@@@@@@@     @@
@@#     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      #@@@     %#@@@@@@@@@@#                                                  @@@@@@@@@@@@    @@@@@@@@@@@#        %@@@@@@                                             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%%@@@@@@@@@@@@%@     @@@@#    =@@@@@@@@@     @@
@@#     @@@@@@@@@@@@@@@@@@@@@@@@@@@@%     @@@@%     %@@@@@@@@@@@@@@%                                                @@@@@@@@@@@@@    @@@@@@@@@@@@%        @@@@@@@@                     @                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ %@@@@@@@@@@@@@@@@@@@     @@@@     #@@@@@@@     @@
@@#     @@@@@@@@@@@@@@@@@@@@@@@@@@@     #@@%#    #@@@@@@@@@@@@@@@@@@@                                    #          @@@@@@@@@@@@@    @@@@@@@@@@@@@%        @@@@@@@@@                    @#                        %@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@    *@@@%     @@@@@@     @@
@@@     @@@@@@@@@@@@@@@@@@@@@@@@@     %@@@     @@@@@@@@@@@@@@@@@@@@@@@@                                 @          @@@@@@@@@@@@@@    @@@@@@@@@@@@@@@        @@@@@@@@@#                  %@@                         @@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@@#    #@@@@     @@
@@@     @@@@@@@@@@@@@@@@@@@@@@%     @@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                             %@         @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@#      %@@@@@@@@@@%                 %@@#                         #@@@@@@@@@@@@@@@@@@@@@@#  @%@@% @@@@@@@@@@@@@@@@@@@@     @@@@    #@@@     @@
@@@     @@@@@@@@@@@@@@@@@@@@@     @@@#    %@@@@@@@@@@@@@@@@@@@%@@#                                     @%         @@@@@@@@@@@@@@@#   @@@@@@@@@@@@@@@@@%      %@@@@@@@@@@@#                %@@#                          %@@@@@@@@@@@@%@#   @@@@# *%@@@@@@@@@@@@@@@@@@@@@@@@%    %@@@     %@     @@
@@@     @@@@@@@@@@@@@@@@@@@       @     @@@@@@@@@@@@@@@@@@@                                           @@         @@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@%      %@@@@@@@@@@@@               %@@@#                           %@@@@#     #@@#    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     %@@@          @@
@@@     @@@@@@@@@@@@@@@@@@    #@@    #%@@@@@@@@@@@@@@@@@@@@@@#@#                                     @@@        @@@@@@@@@@@@@@@@@@#  @@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@%              #@@@%                              #@%@@#   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    @@@@         @@
@@@     @@@@@@@@@@@@@@@@%    @@@    @@@@@@@@@@@@@@@@@@@@@@#                                          @@%        @@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@     %@@@@@@@@@@@@@@              @@@@#                            @#   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    %@@        @@
@@@     @@@@@@@@@@@@@@@    #@@    @@@@@@@@@@@@@@@@@@@@%                                             @@@%       @@@@@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@@@@     %@@@@@@@@@@@@@@             %@@@@%                             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    #@@#      @@
@@@     @@@@@@@@@@@@@#    @@    @@@@@@@@@@@@@@@@@@@%                                               @@@@#       @@@@@@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@#            @@@@@@                             %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@     @@
@@@     @@@@@@@@@@@@     %#   @@@@@@@@@@@@@@@%@#                                                   @@@@#      @@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@@@@@@@@@@@    #@@@@@@@@@@@@@@@%           @@@@@@%                             #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    %@     @@
@@@#    @@@@@@@@@@@    ##    @@@@@@@@@@@@@@@                                                       @@@@#      @@@@@@@@@@@@@@@@@@@@@@ %@@@@@@@@@@@@@@@@@@@@@@@%    @@@@@@@@@@@@@@@@%          *@@@@@@#                              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         #@@
@@@#    @@@@@@@@@     %    @@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@                                       @@@@@%      @@@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@@          @@@@@@@#                              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#       #@@
@@@#    @@@@@@@@    @@   #@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@%                                         @@@@@@     #@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@#   @@@@@@@@@@@@@@@@@@         @@@@@@@@#          #                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%         #@@
@@@@    @@@@@@@    #    @@@@@@@@@@@@@%@@@@@@@@@@@@@@@@#                                          @@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@#       #@@@@@@@@#         #                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%  %@@@%@      @@@
@@@@    @@@@@     #    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    #                                      @@@@@@@@%    @@@@@@@@@@@@@@@@@@@@@@@@@ #@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@        @@@@@@@@@#        @#                    @@@@@@@## @@@@@@@@@@@@@@@@@@@@@@@@@@%#%%@@@@##%@@@@@    @@@
@@@@    @@@@#    @   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# #@@@                                       @@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@@@@@@@@@@@@%  %@@@@@@@@@@@@@@@+              =@@@@@        @@                    #@@# *##      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@
@@@@    @@@@    #   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                         @@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@@@# %@@@@@@@@@%%  #%@@@@@      %@@@              @@                      #@@@@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@
@@@@    #@@    #   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                           @@@@@@@@@%   @@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@@@*  %@@@@@@@@@@#     #@@@@@@@@@        @@#                    %@@@@@@@@@@@#   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    @@@
@@@@    #@    *    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                             @@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% %@@@* @@@@@@@@@@@@@@@#    @@@@@@@@@@@%       @@                  #@@@@@@@@@@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@
@@@@    #    *   @@@@# @@%@@@@@@@@@@@@@@@@@@@@@@                                               @@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ #@@ @@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@                          @@@@@@@@@@@@@@@@%    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@
@@@@                @@@@@@@@       @@@@@@@@@#                                                  %@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@     %@#                @@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@
@@@@           #@@@@@@@@#    #@@@@@@@@@@@%                                                     @@@@@@@@@@@@  @%+          *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@%    #@@                @@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@
@@@%           @@@@@@@@@@@@@@@@@@@@@@@%                                             #          @@@@@@@@@@#     #@@@@@@@@@@@@@   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# @@@@@@@@@@@@@%    #@@               @@@@@@@@@@@@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@@@
@@@%          @@@@@@@@@@@@@@@@@@@@@#                                               #@          @@@@@@%    %@@ @@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@    @@@#              @@@@@@@@@@@@@@@@@@@@@@@#   %@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@@@
@@@%         @@@@@@@@@@@@@@@@@@@#                   @%@@                           @@          @@@@%  #%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@   @@@%  @%         %@@@@@@@@@@@@@@@@@@@@@@@@%  #@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@@@
@@@@        @@@@@@@@@@@@@@@@%#                 *@@@@@@%                            @@@        #@@+  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@ @@@         @@@@@@@@@@@@@@@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@
@@@@        @@@@@@@@@@@@%#                #@@@@@@@@@@*                             @@@        #*  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  *@@@@@@@@     @   @@@@@@@@@@@@@@@@@@@@@@@@@@#   @@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@
@@@@       @@@@@@@@@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@@@@                               @@@%         %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@     @   @@@@@@@@@@@@@@@@@@@@@@@@@@%   #@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@
@@@@      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                @@@@%       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @   @@@@@@@@@@@@@@@@@@@@@@@@@@@#   @@@@@@@@@@@@@@@@@@@@@@@@@    @@@@
@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@%      #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@#    @@@@
@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                  @@@@@%      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@   %@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@      @@@@
@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                   @@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*      =@@@@@@@@@@@@@@@@@@@@@@@@    @@    @@@@@@@@@@@@@@@@@@@@@@@@@@@%   %@@@@@@@@@@@@@@@@@@@@       @@@@
@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                    @@@@@@%     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  @@@@@@@@@@@@@@@@@@@   @@@    %@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@%  #     @@@@
@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                     #@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+      @%@@@@@@@@%       #@@@@@@@@@@@@@@@  @@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@   @@     @@@@
@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                       @@@@@@@    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    %@@@@@@@@@@@@@@@@@@%     @@@@@@@@@@@@@@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@   #@@@@@@%#@%#@@@@@   @@@     #@@@
@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@                                  @@@@@@@#   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@      %@@@@@@@@@@@@@@@@@@@@@@@@@@   +@@@@@@       @#  #@@@@     #@@@
@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@                                   %@@@@@@@   #@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   %@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@=   @@@@@@@#        @@@@@@     #@@@
@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@              @                    @@@@@@@@@#  @@@@@@@@@@@@@@    +%@%@@@@@@#   *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@#   @@@@@@@@%     %@@@@@@@     @@@@
@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@             @@                     @@@@@@@@@  %@@@@@@@@@%    %@@@@@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@#   @@@@@@@%@  %@@@@@@@@@@     @@@@
@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@            @@@                     %@@@@@@@@@ @@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@%   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  #@@@@@@@@@@@@@@@@@@@@@ %@@@@@@@@@@ %@@@@@@@@# @@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@   %@@@@#   #@@@@@@@@@@@@     @@@@
@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@@           @@@@                     @@@@@@@@@@@@@@@@@%   @@@@@@@@@@@@@@@@@@@@@@@@@@@%= @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# @@@@@@@@@@% %@@@@@= @@@@@@@          @@@@@@@@@@@@@@@@@@@@%  %@   %@#   #@@@@@@@@@@@@@@@     @@@@
@@@@@        %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@               %      @@@@@@@@@@@@@@@+  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%@@@@@@@@@@  %%% #@@@@@@@@@          @@@@@@@@@@@@@@@@@%    @@@      *@@@@@@@@@@@@@@@@@%     @@@@
@@@@@    ##   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#         @@@@@@                @      @@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ %@@@@@@@%%   @@@@@@@@@@@@            @@@@@%@@@@@@#@    #@@@@@   %@@@@@@@@@@@@@@@@@@@@      @@@@
@@@@@    #@%   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#        @@@@@@@                @%     @@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% @@#* #%@%@@# #@@@@@@@@@@@            @@@@@@@@@@@@@%@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@      @@@@
@@@@@    #@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@@@                 @@     @@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@*      ++%%@@@ #@@@@@@@@@@@@ @@@@@@@@@%              @@@@@@@@@@@@@@@@@@@@@@@#  %@@@@@@@@@@@@@@@@@@@@      @@@@
@@@@@     @@@@%   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@                 *@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# @@@@@@@@@@#%       @@@               @@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@       @@@@
@@@@%     @@@@@@@   #@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@                  @@@%   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%              %@@@%@             @@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@      #@@@@
@@@@%     @@@@@@@@*   %@@@@@@@@@@@@# %@%% %@@@@@      @@@@@@@@@                    @@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                     @@@@@             =@@@@@@@@@@@@@@@@@@@@@%  #@@@@@@@@@@@@@@@@@@%      #@@@@
@@@@%     @@@@@@@@@@#   @@@@@@%  #@@%% #@@@@@@@@      @@@@@@@@@      #@            %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@%         @@@@@@@    %@@@%   %@@@@              @@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@      #@@@@
@@@@@     @@@@@@@@@@@@#       @%@   #@@@@@@@@@@@     @@@@@@@@%      @@@             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% #@@@@@@@@@@@@@@@@@@@@@#    %@#%@@@@@@@@@@@@@@@@@@@%@%@@@@@@@  @@@@               =@@@@@@@@@@@@@@@@@@@@%   @@@@@@@@@@@@@@@@@@@      @@@@@
@@@@@     @@@@@@@@@@@@@@@#   @#  %@@@@@@@@@@@@@@#   @@@@@@@@@     #@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@             #  @@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@       @@@@@
@@@@@     @@@@@@@@@@@@@@@@@@   #@@@@@@@@@@@@@@@@@   @@@@@@@@    #@@@@@@              %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@%     *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@             @@  #@@@@@@@@@@@@@@@@@@@@   #@@@@@@@@@@@@@@@@@       @@@@@
@@@@@     @@@@@@@@@@@@@@@@@@@@#    @@@@@@@@@@@@@@  @@@@@@@@    %@@@@@@@@              #@@@@@@@@@@@##%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%##                %#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@-     #@@@@@  @@*  %@@@@@@@@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@%       @@@@@
@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@    %@@@@@@@@@@%@@@@@@@@  @@@@@@@@@@@#               @@@@@@@@@@                 %@@@@@@@@@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@    @@@@@@@@@@  @  @@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@       @@@@@
@@@@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@#    %@@@@@@@@@@@@@@@@@@@@@@@@#%@@@                @@@@@@@@=      %@@@@@*  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  #@%  #@@@%# @@@@@@     @@@@@@@@@@@@@@@@@@@#  @@@@@@@@@@@@@@@@@@       @@@@@
@@@@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@  @@# #@@@@@#    @           @@@@@@@     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@  =@@         @@     @@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@        @@@@@
@@@@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@  @@# %@@% @@@@    @           @@@@@@@  #  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@  @%           %%    %@@@@@@@@@@@@@@@@@@@#  #@@@@@@@@@@@@@@@        @@@@@
@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      #= #@@@ #@@@@@#   @#           @@@@@@ #@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@  #   #         @@    @@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@         @@@@@
@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@   @% %@@@       @@@@@ #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@ @@@@@@@@@   @      @@@@   #@* #@    @@@@@@@@@@@@@@@@@@@@@#   @@@@@@@@@@@@@         %@@@@
@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           %@@@@@@@%    #@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@# @@@@@@@@@%  @@  @   @@@@@@% @@@@     #@@@@@@@@@@@@@@@   @@@   @@@@@@@@@@@@@         %@@@@
@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@@@@@@@@@@    @@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%  #%%%%%#  *@@@@@@#    @@  @@    #%@@@@@@@@@   #  @@@@@@@@@@@%%    %@@@#  #@@@@@@@@@@@%   @     %@@@@
@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@#     @@@#  #@@  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%@@@@###                                              @   @@      %@@@@@@@@   @  @@@@@#@@@     #@@@@@@@#  %@@@@@@@@@@    %     @@@@@
@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@@          @%  #@@  @@@@@@@@@@@@@ #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%         %%@@@#%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ *@@@@@@@@@@@@   @@  @@@        @@@@@@   @%  #@@@@@@@@@%@@@@@@@@@@@@  #@@@@@@@@@@    @     @@@@@
@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@            @@  @@#  @@@@@@@@@@@@@ #@@@@@@@@@@@@@@@@@@#         *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@  @@   @@@       @@@@@@   @@@  %@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@   %@     @@@@@
@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@          #   @  @@%  @@@@@@@@@@@@% %@@@@@@%@#        #%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@  @%         @@@@%   @@@@   @@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@    @@     @@@@@
@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@        @@@@#  %  %@% #@@@@@@@@@@@         %#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  *@@            @@@@@#   %@@@@   @@@@@@@@@@@@@@@@@@@@@@%   @@@@@@@%    @@     @@@@@
@@@@@@    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  *@@#    @@@@@@@  #@  #@%  @@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  %@@     %@@  #@@@@@@   #@@@@@@#  @@@@@@@@@@@@@@@@@@@@@@@#  #@@@@@@@    @@     @@@@@
@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  @@@@% #@@@%#     @@  %@%        #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  %@@    @@@@@@@@@@@@@   @@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@    @@@     @@@@@
@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@ #@@#        @@# #@+       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@   @@@@@@@@@@@@    @@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@%  #@@@@@    @@@     @@@@@
@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@@@@@@@%      #@@@# @@%     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@   @@@@@@@@@@%    %@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@    @@@@     @@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  %@@@@@@@@     @@@@@# #@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@#   @@@@@@%@    #@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@% @#    @@@@@    #@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@@@@@         @@#  @@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   @@@@   #           @@@@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@    #@@@@@
@@@@@@    =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@@@@#          #   @@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@@@   %@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    @@@@@     =        %@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@    @@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     %@@@@@@@@@@@%     @@@   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   #@@@@#   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@#      #@@@@@@@@@    @@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%     @@@@@@@@@@@@#  #@@%   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@    %@@@@%   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@#        @@@@@@@@@@    @@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*      @@@@@@@@    %@@@#   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@#         #@@@@@@   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@%@@@@@        %@@@@@@@@@@@    @@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @%    @@@@    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@#                    @@@@@%    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@    @@@@@@
@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   %@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@%     @@@@@#                    @%@@@@@#      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@
@@@@@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@@@@     @@@@@@@@@@     @@@%@#                              *@@@@@@%         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    @@@@@@
@@@@@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=    @@@@@@                               #@@@@@@@@@@@@@@@@@@       @            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@@@@
@@@@@@     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    =@@@@@@@@                     #%@@@@@@@@@@@@@@@@@@@@@@@@@@@%@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@@@@
@@@@@@#    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@             %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     %@@@@@
@@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#      @%@@@@@@@@@@@@   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@
@@@@@@#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#               %@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# @          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@#    @@@@@@@#@@@@@@@@@@@@@@@@@@@@@#            @@     @@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ #@@@@@@@@% %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@ # #@@  @@@@@@@@@@@@@@@@@@@%       #@@@@@@@@@@# @@@@@@@@@@@@@@%@               #@@     @@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+#@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@ #@@@@@@*@ #@@@                      %%@@@@@@@@@@@@@@@% @@@@@@@#              #%@@@@@@@@     @@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@#   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% @@@  @@@@@@#@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             #@@@@@@@@@@@@@@@@@     @@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ *@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ %@@@ @@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# #@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@=        #@@@@@@@@@@@@@@@@@@@@@@@@@@##@@@@@@@@@ #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% #@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@@@@@@@@@@@@@@@@%@         %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@# @@@@@@@@@@@@@@@@@@@@@@@     @@@@@@
@@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    @@@@@@@@@@@@@@@@@@@@@@@@@@@      #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% %@@@@@@@@@@@@@@@@@@@%     @@@@@@
@@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ %@@@@@@@@@@@@@@@@@%     @@@@@@
@@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@% @@@@@@@@@@@@@@@@%    #@@@@@@
@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@    #@@@@@@
@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@%      *@@@@@@
@@@@@@@#                                                                                                                                                                                                                                                                                   @@@@@@@
@@@@@@@@@@##############################################################################################################################################################################################################################################################################*@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
</span>
              
- Ever wanted to hack something? Try running 'hack <target>' (e.g., hack nasa.gov)
- Wanna try log in as root and do cool stuff? Try looking for the .passwords.txt   file in root directories
- Btw, ever wondered who you are really? Why dont you try running 'whoami --really' and find out!
- Some treasures require patience… follow the special folders in / if you dare.(go 2 directories back by using 'cd /' and then follow special and to return back to main just type 'cd')

Pro tip: The secret to high-performing code is... lots of coffee, good music, and persistent debugging. ☕️ 🎵\n\n`
            },
            '.bash_history': {
              type: 'file',
              content: "ls\ncd projects\nls -la\ncat .secret\nclear\nneofetch"
            },
            projects: {
              type: 'dir',
              children: {
                '.git': { type: 'dir', children: {} },
                SaaS: {
                  type: 'dir',
                  children: {
                    'eunokinetix.txt': {
                      type: 'file',
                      content: `
Project Name: EunoKinetiX
March 2023 - April 2025

• Co-founded an AI-powered fleet management system for real-time school transportation. Led development and system architecture.

• Core Features:
  - AI route optimization based on payload input, adapting to last-minute changes in student locations and attendance.
  - Live AI payload optimization for maximum efficiency of buses.
  - Student attendance input updates payload dynamically, reducing wasted stops.
  - Real-time transport tracking for school administrators and parents.

• Tech Stack: HTML, CSS, JavaScript, Node.js, SQL

• Achievements:
  - Won AED 23K at Ru'ya Careers' Next Founder Competition
  - Raised AED 8K via crowdfunding
  - Presented at GITEX, Intersec, COP28

• Project concluded as team transitioned to university after achieving multiple awards and milestones.

`
                    },
                    'student2success.txt': {
                      type: 'file',
                      content: `
Project Name: Student2Success (S2S)
March 2024 - May 2025

• Co-founded a mentorship platform to empower students with personalized guidance.

• Developed a mentorship system connecting students with seniors, reaching 100+ users.

• Implemented key features including AI Live Counselor, real counselor appointments, portfolio/resume builder, opportunity posts, and private chats.

• Built full-stack using HTML, CSS, JavaScript, Node.js, and SQL.

• Fostered an active student community for peer-to-peer learning and experience sharing.

• Presented at GITEX

• Project concluded after its initial pilot phase, yielding valuable insights from early users.

`
                    }
                  }
                },
                ComputerVision: {
                  type: 'dir',
                  children: {
                    'bus-logging-sys.txt': {
                      type: 'file',
                      content: `
Bus Logging System
A QR code-based bus logging system built with Python, OpenCV, and Firebase, originally developed for GEMS Modern Academy to track bus entries and exits in real-time.

• Real-time bus scanning using QR codes via camera (main.py) and logging of entry/exit.
• Automatic log creation and upload to Firebase Firestore using uploader.py.
• Web dashboard (app.py) built with Flask to view logs, filter/export data, and flag late buses (Entry after 7:45 AM → Late In; Exit after 3:20 PM → Late Out).
• QR code generation for buses using qrcode_generator/codeGen.py.
• Data stored in Firestore (bus_logs collection) with fields: BusLicense, BusNo, DataTime, Date, Status, Time.
• Streamlined workflow for school transport management and analytics.

Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/BusLoggingSystem', '_blank')">https://github.com/JishnuSetia/BusLoggingSystem</span>

`
                    },
                    'object-detection.txt': {
                      type: 'file',
                      content: `
Object Detection

A real-time computer vision project for detecting and localizing objects in images and video streams using YOLOv5.

• Developed an end-to-end object detection pipeline that processes camera streams or video input, drawing bounding boxes with class labels for detected objects.
• Optimized inference workflows for efficient performance across varied datasets and real-world scenarios.
• Modular architecture allows easy integration of custom models and additional object classes.
• Demonstrates practical applications in automation, surveillance, and intelligent systems requiring real-time object identification.
• Project License: No License, all rights reserved.

Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/ObjectDetection', '_blank')">https://github.com/JishnuSetia/ObjectDetection</span>

`
                    }

                  }
                },
                Utilities: {
                  type: 'dir',
                  children: {
                    'js-notepad.txt': {
                      type: 'file',
                      content: `
Notepad by Jishnu v1.0 (Java Edition)

A simple Notepad application built in Java with a graphical user interface for creating, editing, and saving text files.

• Features include opening, editing, and saving text files with basic GUI text editor functionality.
• Keyboard shortcuts handled via KeyHandler.java for a smooth user experience.
• Hidden surprise: users can customize the Notepad with stickers and small UI enhancements for fun (not mentioned in the README!).
• Project License: No License, all rights reserved.

Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/JS-Notepad', '_blank')">https://github.com/JishnuSetia/JS-Notepad</span>

`
                    }

                  }
                },
                Websites: {
                  type: 'dir',
                  children: {
                    'gma-eco-club-website.txt': {
                      type: 'file',
                      content: `
GMA Nature Nurturers Website

A website for GEMS Modern Academy's Eco Club to showcase activities, events, and environmental initiatives.

• Responsive website designed for the Eco Club.
• Displays events, competitions, and club initiatives.
• Engaging design with interactive elements.
• Tech Stack: HTML, CSS, JavaScript.
• Project License: No License, all rights reserved.

Live Site: <span class="link" onclick="window.open('https://gmanaturenurturers.surge.sh/', '_blank')">https://gmanaturenurturers.surge.sh/</span>
Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/GMA-EcoClubWebsite', '_blank')">https://github.com/JishnuSetia/GMA-EcoClubWebsite</span>

`
                    },
                    'js-terminal-portfolio.txt': {
                      type: 'file',
                      content: `
JS Terminal Portfolio

An interactive, command-driven portfolio built entirely with JavaScript, HTML, and CSS. Designed to mimic a real terminal shell with a custom file system and personalized content.

• Fully interactive terminal UI with a wide range of commands to explore personal info (about, skills, education, awards, projects, socials).
• Includes hidden easter eggs for playful surprises and interactive exploration.
• Custom file system structure with realistic Linux directories and content files for projects, skills, and experience.
• Dynamic theme switching, ASCII art, and terminal-style responses enhance user experience.
• Tech Stack: JavaScript, HTML, CSS; runs entirely client-side.
• Project License: No License, all rights reserved.

Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/JS-TerminalPortfolio', '_blank')">https://github.com/JishnuSetia/JS-TerminalPortfolio</span>

`
                    }

                  }
                },
                Games: {
                  type: 'dir',
                  children: {
                    'alternative-alphabet.txt': {
                      type: 'file',
                      content: `
Alternative Alphabet 

A gamified version of the original Alternative Alphabet card game, designed to promote mental health awareness among young adults.

• Java Edition: Developed in Java; based on the original card game by GEMS Education.
• Web Edition: Fully playable online with interactive UI.
• Players engage with prompts from the alternative alphabet to encourage cognitive engagement and mental health awareness.
• Credits: GEMS Education for the Original Card Game. Built By Me.
• Project License: No License, all rights reserved.

Web Game: <span class="link" onclick="window.open('https://alternative-alphabet-jishnu-setia.surge.sh/', '_blank')">https://alternative-alphabet-jishnu-setia.surge.sh/</span>
Java Edition Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/AlternativeAlphabet-JavaEdition', '_blank')">https://github.com/JishnuSetia/AlternativeAlphabet-JavaEdition</span>
Web Edition Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/AlternativeAlphabet-WebEdition', '_blank')">https://github.com/JishnuSetia/AlternativeAlphabet-WebEdition</span>

`
                    },
                    'snake-game-python.txt': {
                      type: 'file',
                      content: `
Snake Game — Python Edition

A classic Snake game implemented in Python with a simple, responsive UI and smooth controls.

• Built using Python and Pygame for interactive gameplay and graphics.
• Features include: snake movement, food spawning, score tracking, and game over conditions.
• Designed to be intuitive and fun while demonstrating game logic and real-time input handling.
• Project License: No License, all rights reserved.

Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/SnakeGame-PythonEdition', '_blank')">https://github.com/JishnuSetia/SnakeGame-PythonEdition</span>

`
                    },
                    'hangman-java.txt': {
                      type: 'file',
                      content: `
Hangman — Java Edition (GUI)

A classic Hangman word-guessing game developed in Java with a graphical user interface.

• Built using Java Swing; includes interactive GUI components for guessing letters, tracking lives, and displaying the word.
• Features random word selection, visual feedback, and an intuitive interface for users.
• Built as 10th Grade Computer Applications project.
• Project License: No License, all rights reserved.

Github: <span class="link" onclick="window.open('https://github.com/JishnuSetia/Hangman-JavaEdition', '_blank')">https://github.com/JishnuSetia/Hangman-JavaEdition</span>

`
                    }
                  }
                }
              }
            },
            socials: {
              type: 'dir',
              children: {
                'github.link': { type: 'link', url: 'https://github.com/jishnusetia', description: 'My GitHub Profile' },
                'mail.txt': {
                  type: 'file',
                  content: `
(\\_/)
( •_•)  "Psst… want to reach me? Here's the key:"
/ >📧   jishnusetia8@gmail.com                  
                  `
                },
                'instagram.link': { type: 'link', url: 'https://www.instagram.com/jishnu_setia/', description: 'My Instagram Profile' },
                'linkedin.link': { type: 'link', url: 'https://linkedin.com/in/jishnusetia', description: 'My LinkedIn Profile' }
              }
            }
          }
        }
      }
    }
  }
};

let currentPath = ['home', 'guest'];
let commandHistory = [];
let historyIndex = -1;

function getDir(path) {
  let curr = VFS;
  for (const part of path) {
    if (curr.children && curr.children[part]) {
      curr = curr.children[part];
    } else {
      return null;
    }
  }
  return curr;
}

function getPathString() {
  return '/' + currentPath.join('/');
}

function resolvePath(pathStr) {
  if (!pathStr) return null;

  // Handle paths
  let targetPath;
  if (pathStr === '~') {
    targetPath = ['home', 'guest'];
  } else if (pathStr === '/') {
    targetPath = [];
  } else if (pathStr.startsWith('/')) {
    targetPath = pathStr.split('/').filter(p => p !== '');
  } else {
    targetPath = [...currentPath, ...pathStr.split('/').filter(p => p !== '')];
  }

  // Resolve .. and .
  const finalPath = [];
  for (const part of targetPath) {
    if (part === '.') continue;
    if (part === '..') {
      if (finalPath.length > 0) finalPath.pop();
    } else {
      finalPath.push(part);
    }
  }

  return {
    dir: getDir(finalPath.slice(0, -1)) || VFS,
    name: finalPath[finalPath.length - 1],
    fullPath: finalPath
  };
}

const COMMANDS = {
  help: {
    description: 'List all available commands',
    execute: () => {
      const commands = Object.keys(COMMANDS).filter(cmd => cmd !== 'hack').sort();
      let result = '\nAvailable commands:\n\n';
      commands.forEach(cmd => {
        result += `<span class="command-help">${cmd.padEnd(12)}</span> - ${COMMANDS[cmd].description}\n`;
      });
      result += '\n'
      return result;
    }
  },
  ls: {
    description: 'List directory contents (supports -a, -l, targets)',
    execute: (args) => {
      let showHidden = false;
      let longFormat = false;
      const targets = [];

      args.forEach(arg => {
        if (arg.startsWith('-')) {
          if (arg.includes('a')) showHidden = true;
          if (arg.includes('l')) longFormat = true;
        } else {
          targets.push(arg);
        }
      });

      if (targets.length === 0) targets.push('.');

      const results = [];

      targets.forEach(target => {
        let targetPath;
        if (target === '.') {
          targetPath = [...currentPath];
        } else if (target === '..') {
          targetPath = currentPath.slice(0, -1);
        } else if (target === '~') {
          targetPath = ['home', 'guest'];
        } else if (target.startsWith('/')) {
          targetPath = target.split('/').filter(p => p !== '');
        } else {
          targetPath = [...currentPath, ...target.split('/').filter(p => p !== '')];
        }

        const entry = getDir(targetPath);

        if (!entry) {
          results.push(`<span class="error-color">ls: cannot access '${target}': No such file or directory</span>`);
          return;
        }

        if (entry.type === 'dir') {
          if (targets.length > 1) results.push(`${target}:`);

          let items = Object.keys(entry.children);
          if (showHidden) {
            items.push('.', '..');
          } else {
            items = items.filter(item => !item.startsWith('.'));
          }
          items.sort();

          if (longFormat) {
            let list = showHidden ? `total ${items.length}\n` : '';
            items.forEach(item => {
              let child;
              if (item === '.') child = entry;
              else if (item === '..') child = getDir(targetPath.slice(0, -1)) || VFS;
              else child = entry.children[item];

              const entryData = child.type === 'dir' ? { type: 'd', perms: 'rwxr-xr-x' } : (child.type === 'link' ? { type: 'l', perms: 'rwxr-xr-x' } : { type: '-', perms: 'rw-r--r--' });
              const colorClass = child.type === 'dir' ? 'host' : (child.type === 'link' ? 'user' : 'text-color');
              const size = child.type === 'dir' ? Object.keys(child.children || {}).length : (child.content ? child.content.length : 0);

              list += `<span class="sep">${entryData.type}${entryData.perms}</span>  <span class="user">jishnusetia</span>  <span class="host">guest</span>  <span class="sep">${size.toString().padStart(4)}</span>  <span class="${colorClass}">${item}${child.type === 'dir' ? '/' : ''}</span>\n`;
            });
            results.push(list.trimEnd());
          } else {
            results.push(items.map(item => {
              let child;
              if (item === '.') child = entry;
              else if (item === '..') child = getDir(targetPath.slice(0, -1)) || VFS;
              else child = entry.children[item];

              const colorClass = child.type === 'dir' ? 'host' : (child.type === 'link' ? 'user' : 'text-color');
              return `<span class="${colorClass}">${item}${child.type === 'dir' ? '/' : ''}</span>`;
            }).join('  '));
          }
        } else {
          // It's a file or link
          if (longFormat) {
            const fileName = target.split('/').pop();
            const entryData = entry.type === 'link' ? { type: 'l', perms: 'rwxr-xr-x' } : { type: '-', perms: 'rw-r--r--' };
            const colorClass = entry.type === 'link' ? 'user' : 'text-color';
            const size = entry.content ? entry.content.length : 0;
            results.push(`<span class="sep">${entryData.type}${entryData.perms}</span>  <span class="user">jishnusetia</span>  <span class="host">guest</span>  <span class="sep">${size.toString().padStart(4)}</span>  <span class="${colorClass}">${fileName}</span>`);
          } else {
            const colorClass = entry.type === 'link' ? 'user' : 'text-color';
            results.push(`<span class="${colorClass}">${target.split('/').pop()}</span>`);
          }
        }
      });

      return results.join('\n\n');
    }
  },
  cd: {
    description: 'Change directory',
    execute: (args) => {
      if (!args[0] || args[0] === '~') {
        currentPath = ['home', 'guest'];
        updatePrompt();
        return '';
      }
      if (args[0] === '/') {
        currentPath = [];
        updatePrompt();
        return '';
      }
      if (args[0] === '..') {
        if (currentPath.length > 0) currentPath.pop();
        updatePrompt();
        return '';
      }

      const targetPath = args[0].split('/').filter(p => p !== '');
      let newPath = args[0].startsWith('/') ? [] : [...currentPath];

      for (const part of targetPath) {
        if (part === '.') continue;
        if (part === '..') {
          if (newPath.length > 0) newPath.pop();
        } else {
          newPath.push(part);
        }
      }

      const dir = getDir(newPath);
      if (dir && dir.type === 'dir') {
        currentPath = newPath;
        updatePrompt();
        return '';
      } else {
        return `<span class="error-color">cd: no such directory: ${args[0]}</span>`;
      }
    }
  },
  pwd: {
    description: 'Print working directory',
    execute: () => getPathString()
  },
  cat: {
    description: 'Display file content',
    execute: (args) => {
      if (!args[0]) return 'cat: missing file operand';

      const resolved = resolvePath(args[0]);
      if (!resolved || !resolved.dir) return `cat: ${args[0]}: No such file or directory`;

      const file = resolved.dir.children ? resolved.dir.children[resolved.name] : null;

      if (file) {
        if (file.type === 'file') {
          if (resolved.name === 'about.txt') {
            return `
<div class="about-container">
  <img src="/me.jpg" class="about-image" alt="Jishnu Setia">
  <div class="about-text-content">
    ${file.content.trim().replace(/\n/g, '<br>')}
  </div>
</div><br>`;
          }
          return file.content;
        } else if (file.type === 'link') {
          return `URL: <span class="link" onclick="window.open('${file.url}', '_blank')">${file.url}</span>\n\n<span class="info-label">Tip:</span> Use the <span class="command-help">open ${args[0]}</span> command to open this link in a new tab.`;
        } else if (file.type === 'dir') {
          return `cat: ${args[0]}: Is a directory`;
        }
      }
      return `cat: ${args[0]}: No such file or directory`;
    }
  },
  open: {
    description: 'Open a link file',
    execute: (args) => {
      if (!args[0]) return 'open: missing link operand';
      const dir = getDir(currentPath);
      const file = dir.children[args[0]];
      if (file && file.type === 'link') {
        window.open(file.url, '_blank');
        return `Opening ${file.description || args[0]} in a new tab...`;
      } else {
        return `open: ${args[0]}: Not a valid link file`;
      }
    }
  },
  whoami: {
    description: 'Display current user identity',
    execute: (args) => {
      if (args[0] === '--really') {
        return `
        <span class="ascii-logo2">
                           %@% #@*                  @@                                                                                                                                                                            
                             @@ @@@               @@@@@                                                                                                                                                                           
                              @@  @@            @@@   @@                                                                                                                                                                          
                               @@  @@@@      @@@@     @@                                                                                                                                                                          
                                @@@   @@@@@@@@     @@@@                                                                                                                                                                           
                                  @@@          @@@@@                                                                                                                                                                              
                                    @@    @@@@@@                                                                                                                                                                                  
                                    @@   @@                                                                                                                                                                                       
                                    @@   @@                                                                                             @@@@@@@@@@@@@@@@                                                                          
                                    @@   @@                                                   @@@                   @@@@@@@@@@@@      @@@              @@@@                                                                       
                                    @@   @@                                               @@@@@@@@@@@@         @@@@@            @@@  @@                   @@@                                                                     
                                    @@   @@@                          @@@@@@@      @@@@@@@@          @@@     @@@                 @@  @@                     @@                                                                    
                                     @@   @@                        @@@      @@ @@@@    @@             @@@  @@                   @@@ @@                     @@                                                                    
                                     @@   @@                      @@          @@@       @@              @@@@@                     @@ @@                     @@ @@@@@@@                                                            
                                     @@   @@                    @@@           @@       @@@    @@@@@@@@@  @@@@@                    @@ @                     @@@@@      @@@@                                                        
                                     @@   @@                    @@            @@       @@@@@@@@        @@@@@ @@                   @@ @                     @@@@          @@@@                                                     
                                     @@   @@                   @@             @         @@@  @@@@@@       @@  @@                   @@                      @@@              @@                                                    
                                      @@  @@                   @@@@@@@@@@@@@@@@         @@  @@   @@       @@   @@@                 @@                      @                  @@                                                  
                                      @@   @@                  @@    @@@@@@  @@          @  @@   @@       @@   @@@@@               @@@                    @@                   @@                                                 
                                      @@   @@                  @@   @@    @@  @          @@  @@@@@       @@@    @  @@@              @@                    @@                    @@                                                
                                      @@    @@                  @@   @@  @@  @@           @@            @@@   @      @@@            @@                   @@@                     @                                                
                                      @@      @@@@               @@   @@@@   @@            @@@        @@@   @@@@@      @@            @                   @@                      @@                                               
                                      @@         @@@@             @@         @@              @@@@@@@@@@   @@@  @@       @@           @@                  @@                      @@                                               
                                      @@         @@                @@@@      @@                        @@@@@@  @@@       @@          @@                 @@                      @@                                                
                                      @@@        @@                  @@@@@@@ @@                     @@@@  @@    @@        @@         @@                 @@                      @@   @@@                                          
                                       @@        @@                   @@                         @@@@   @@@     @@         @@         @@                @@                     @@  @@  @@@                                        
                                       @@       @@                   @@@@@@                 @@@@@@    @@@      @@           @@        @@               @@@                    @@ @@@     @@                                       
                                       @@       @@                   @@@@@@@@@@@@@@@@@@@@@@@@      @@@@        @@           @@@       @@               @@                     @@@@        @@                                      
                                       @@      @@                    @@  @@@                   @@@@@           @@            @@@                       @@                    @@@@          @@                                     
                                       @@      @@                     @@   @@@@@@@@@@@@@@@@@@@@@              @@              @@                       @                    @@              @                                     
                                       @@      @@                     @@                                     @@                @@                                          @@               @@                                    
                                       @@      @@                      @@            @@                     @@                  @@                                        @@                @@                                    
                                       @@     @@                       @@             @@                  @@@                    @@                                      @@                 @                                     
                                       @@     @@                        @@@           @@@@            @@@@@                       @@                                    @@                @@@                                     
                                       @@    @@@                         @@@@        @@@ @@@@@@@@@@@@@@                            @@@                                @@@                @@                                       
                                       @@    @@                             @@@@@@@@@@                                               @@                              @@@                @@@@@                                     
                                       @@    @@                                     @@@@                                              @@@@                           @                 @@   @@@                                   
                                       @@    @@                                        @@@@@@@   @@@@                                    @@@@@@                                      @@@      @@                                  
                                      @@     @                                             @@@@@@@@ @@@@                                     @@@@@                                  @@         @@                                
                                      @@    @@                                                         @@@@@@@@@@@                                @@@@                            @@@          @@                                 
                                      @@    @@                                                             @@@                                        @@@@                      @@@            @@                                 
                                      @@    @@                                                              @@                                           @@@@                  @@              @@                                 
                                      @@   @@                                                              @@@                                              @@@@             @@@              @@                                  
                                     @@    @@                                                            @@@                   @@                              @@@                          @@@@@@@                               
                                     @@    @@                                                           @@                      @@                               @@@                      @@@     @@                              
                                     @@    @                                                          @@@                @        @@                               @@@                  @@@        @@@                            
                                    @@    @@                                                        @@@         @@       @@        @@@                                @@             @@@@            @@                           
                                    @@    @@                                                       @@           @@        @          @@                                @@@                            @@                          
                                    @@    @@@@@@@@@@@@@@@@@@@@                                   @@@           @@         @@          @@@                                @@@                           @                          
                                    @@    @@                  @@@@@                             @@             @@         @@           @@@                                @@@                          @                          
                                @@@@@@    @@                       @@@                         @@              @@          @@            @@                                 @@           @@@        @@@@                          
                             @@@@  @@    @@                          @@@                      @@               @           @@             @@                                 @@@      @@@@@     @@@@@  @@                         
                           @@@     @@    @@                            @@@          @@@@@    @@               @@            @@             @@                                  @@ @@@@@  @@ @@@@@       @@                        
                          @@@      @@    @@                              @@         @@  @@@@@@@               @@            @@              @@@                                @@@@     @@@              @@                       
                         @@@      @@     @@                               @@@        @@@   @@@@              @@             @@               @@                             @@@@        @@               @@                       
                         @@       @@    @@                                  @@        @@@     @@@@@         @@              @@                @@                       @@@@@@          @@               @@                        
                        @@        @@    @@                                   @@         @@        @@@@@    @@@              @@                 @@                  @@@@@    @@         @@@@@           @@                         
                        @@        @     @@                                    @@         @@           @@@@@@                @@                  @@             @@@@@        @@         @@   @@@@@@   @@@                         
                        @@        @     @@                                     @@         @@@             @@@@@@@           @@                  @@@      @@@@@@@            @@        @@         @@@@@@@@                        
                        @@       @@     @@                                      @@       @@@@@               @@ @@@@@@@@    @@                   @@@@@@@@@@                 @@       @@                 @@@                      
                        @@       @@     @@                                      @@      @@   @@             @@         @@@@@@@@@@@@@   @@@@@@@@@@@@       @@                @@       @@                   @@                      
                        @@       @@    @@                                       @@     @@     @@@            @@@                  @@@@@@                   @@               @@       @@                    @@                     
                        @@      @@     @@                                       @@   @@@       @@              @@                  @@                      @@               @@       @@                     @@@                   
                         @@     @@     @@                                       @@@@@@          @@             @@@                 @@                      @@               @@       @@                      @@                   
                         @@     @@     @@                                       @@@             @@              @@                  @@                     @@               @@       @@                       @@@                 
                         @@    @@     @@                                        @@              @@               @@                  @                     @                @@       @@                        @@@                
                          @@   @@     @@                                        @@               @@              @@                  @@                   @@                @@      #@%                         %@@               
        </span>
        <div class="info-container">"Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear."<br>-- Master Oogway<br></div>
        <br>`;
      }
      return 'guest';
    }
  },
  clear: {
    description: 'Clear the terminal screen',
    execute: () => {
      output.innerHTML = '';
      return '';
    }
  },
  neofetch: {
    description: 'Show system information',
    execute: () => {
      showNeofetch();
      return '';
    }
  },
  theme: {
    description: 'Change terminal theme (retro, matrix, dracula, nord, monokai, gruvbox, tokyonight, solarized)',
    execute: (args) => {
      const themes = ['retro', 'matrix', 'dracula', 'nord', 'monokai', 'gruvbox', 'tokyonight', 'solarized'];
      if (!args[0]) {
        return `Usage: theme [name]\nAvailable themes: ${themes.join(', ')}`;
      }
      const choice = args[0].toLowerCase();
      if (themes.includes(choice)) {
        if (choice === 'retro') {
          document.body.removeAttribute('data-theme');
        } else {
          document.body.setAttribute('data-theme', choice);
        }
        return `Theme changed to: ${choice}`;
      } else {
        return `Error: '${choice}' is not a valid theme.\nAvailable themes: ${themes.join(', ')}`;
      }
    }
  },
  exit: {
    description: "Try to exit the terminal...",
    execute: () => {
      const messages = [
        "Nice try… you're not leaving that easily! 😎",
        "Exit command disabled. Stay awhile and enjoy the vibes!",
        "You can't escape… but that's okay, we have coffee ☕",
        "Exiting is for mere mortals. You're special, so stay!",
        "If you really want to leave… just type 'cd /' and explore instead!",
        `
<span class="ascii-logo2">
                                                                                                                                                 %                                                         
                                                        %%%                                                                                    %%@                                                         
                                                       #@@@@                                                                                  #@@@@                                                        
                                                      %@@@@@@@@                                                                              @@@@@#                                                        
                                                      #@@@@@@@@                                                                            %@@@@@@@                                                        
                                                      @@@@@@@@@                                                                           #%@@@@@@@@                                                       
                                                      @@@@#                                                                                    @@@@%                                                       
                                                      @@@@@@                                                                                   @@@%@                                                       
                                                      @@ %@@          %%@@%                                                                   *@* @@@                                                      
                                                      ##  *=       #@@@@@@@%                                                                  %                                                            
                                                      =        *%@@@@@@@@@@@@-                                                                                                                             
                                                           *%@@@@@@@@@@@@@@@@@#                                                                                                                            
                                                        *@@@@@@@@@@@@@@@@@@@@@@=                                                                                                                           
                                                      #%@@@@@@@@@@@@@@@@@@@@@@@*                                                                                                                           
                                                     %@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                            
                                                    %@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                             
                                                   %@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                              
                                                  %@@@@@@@@@@@@@@@@@@@@@@@@@%         *%@%##@                *%%%@@@@@@@@@@@%%#                                                                            
                                                 %@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#                                                                        
                                                %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@%*    *%@%@@@@@@@@@@@@@@%       +   @@%@@@@@@%%                                                                     
                                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@@%       %@@@@@@@@@       @@@@@@@@@@  #@@@@@@@                                                                    
                                             %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    %@@@@@@@@@@@%      @@@@@@@#       @@@@@@@@@@@%    @@@@@@#                                                                  
                                            %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      %@@@@@@@@@@@@*     =%@@@@%+      @@@@@@@@@@@@@@    %@@@@@                                                                  
                                           %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#     @@@@@@@@@@@@@@@     =%@@@@@@      @@@@@@@@@@@@@%      @@@#                                                                  
                                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%     %%@@@@@@@@@@@@#     @%#  @@@*     @@@@@@@@@@@@@@      #@%                                                                   
                                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+     @@@@@@@@@@@@@     ##     @@%     #@@@@@@@@@@@%                                                                             
                                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%     @@@@@@@@@@@     @@%        ##     @@@@@@@@@@                                                                              
                                     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       *@@@%+     %%@%         @@@       #%#*                                                                                 
                                    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             @@@@@@@@@@@@@@@@@@@@@                                                                                         
                                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@%    %%@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%                                                                                   
                                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                                                                                  
                                *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       #%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                                                                   
                               %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#                                                                                 
                              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%                                                                                
                             %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#                                                                               
                           %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                               
                          #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                               
                         %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                               
                        %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    %#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*                                                                                
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         %@%%@@@@@@@@@@@@@@@@@@@@@@@%%@@@@@#                                                                                   
                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%              #%@@%%@@@@@@@@@@@%                                                                                              
                      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       *%@%+                                                                           ##                     
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                                                                                      @%                     
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                      @@@                    
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                                                                                                     *%@                    
                    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                      @%*                   
                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                      %%@                   
                   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-                                                                                                   @@@@@                   
                  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                   @@@#@%#                  
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                   @@@@@@%                  
                 %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                                                                                                   %@@@@@@@                  
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                      @@@@@@@%*                 
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                                                                                         *@@@@@ @@@                 
               %%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                                                                                          #@@@@@# @@@                 
               %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                                                                                          %@@@@@@@  @@@                 
              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                      *%@@@@@@@@@@@  %@@%                
              %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     %%@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@%#                                         @@@@@@@@@@@@@@@@  =@@%                
             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#                                     %@@@@@@@@@@@@@@@@@   @@@                
             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                   @@@@@@@@@@@@@@@@@@@%  @@%                
             @@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=                             --=+**#%@@@@@@#+                                     @@@@@@@@@@@@@@@@@@@%#  @@@%               
            @@@@@@@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                     @@@@@@@@@@@@@@@@@@@@@@  +@@@               
            %@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+                                                                             @@@@@@@@@@@@@@@@@@@@@@@%  @%%               
           %@@@@@@@@@@@%  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+                                           *@#                    @@@@@@@@@@@@@@@@@@@@@@@%  @@@               
           @@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@%#                             +@%@@@@                    %@@@@@@@@@@@@@@@@@%#@@@@@% @@@               
           #@@@@@@@@@@+     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@#               =%@@%@@@@@@@#                    %@@@@@@@@@@@@@@@@%# @@@@@@ @@%*              
           @@@@@@@@@@%      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@@@*  @@@@@@%#@@@              
          %%@@@@@@@@@#       %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   %@@@@@@@@@@@@@@@@@    @@@@@@@*@@@              
          @@@@@@@@@@@         %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  @@@@@@@@@@@@@@@@@@      @@@@@@@@%%              
          #@@@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@@%       @@@@@%#@%%              
          @@@@@@@@@@#           %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              #@@@@@@@@@@@@@@@@@%         @@@@@ @@@              
          @@@@@@@@@@             %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*         %%@@@@@@@@@@@@@@@@@@@@           ++   %@@              
         %%@@@@@@@@@               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@%                  %@%              
         @@@@@@@@@@#                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                   @@%*             
         @@@@@@@@@@                   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                     @@%#             
         @@@@@@%***                     #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       @@@@             
         @@@@#                            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         @@@@             
         %@@@                               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#                          @@@@             
         %@@@                                 #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                             @@@%             
         @@@@                                    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                         *     @@%%             
         @@@%                                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                           %%    %@%%             
         @@@%                                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                              @@    %@@%             
         @@@@                                       #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                %@@   #@@@             
         %%@@                                       #@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@   #@@@             
         %@@@                                       %@@@@@@@@@@     *%@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                 @@@*  #@@@             
          @@@                                       @@@@@@@@@#                @#%@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@%*%@@#@@@@@@@@@@@                                 %@@@  #@@@             
          %@@=                                      @@@@@@@@@@                           @##%@@@@@@@@@@@@@@@@@@@@@@%*#@#                 %@@@@@@@@@                                 *@@@  *@@@             
          #@@+                                      @@@@@@@@@@                                                                            @@@@@@@@@#                                =@@@  *@@%             
          #@@#                                      @@@@@@@@#                                                                             @@@@@@@@@@                                 @@%# +@@%             
          #@@@                                      %@@@@@@@@                                                                             *@@@@@@@@@                                 @@@@ +@@%             
          #@@@                                      %@@@@@@@%                                                                              @@@@@@@@#                                 @@@@ =@@%%            
          #@@@                                      %@@@@@@%                                                                               *@@@@@@@%                                 %@@@ -@@@%            
          %@@@                                      @@@@@@%%                                                                                @@@@@@@@                                 @@@%  @@@@            
          @@@%                                      @@@@@@@                                                                                 #@@@@@@@                                 @@@   @@@@            
          @@@%                                      @@@@@#                                                                                   @@@@@@@                                 @@@   @@@%            
         %%@@@                                      @@@@%%                                                                                    @@@@@@                                        @@@@           
         @@@@@                                      *@@@@                                                                                     %@@@@@                                        *@@@%          
         #@@@@                                       @@@%                                                                                      %@@@@                                         #@@@%         
         @@@@@                                       %@@@@@                                                                                     @@@@                                          @@@@         
        %%@@@@=                                      #@@@@@@                                                                                    @@@@                                           %@@%        
        @@@@@@+                                      #@@@@@@                                                                                  @@@@@@                                            #@@%       
        %@@@@@#                                       @@@@@@                                                                                  @@@@@#                                             #@@@      
        @@@@@@%                                       @@@@@@                                                                                  @@@@@#                                              %@%      
        @@@@@@@       =                                @@@@@                                                                                  @@@@@@                                              -@@@     
       #@@@@@@@      @@%                               %@@@@                                                                                  @@@@@%                                  +**         %@@%     
       @@@@@@@@      @@@#                              *@@@@                                                                                  @@@@@=                                 @@@@@@       @@@%%    
       %@@@@@@%      @@@@+                              @@@#                                                                                  %@@@@                                 *@@@@@@      %@@@@@    
       @@@@@@@%       @@@@                              #@@%%                                                                                 @@@@#                                 @@@@@@%     %@@@@@@    
       @@@@@@@@       @@@@@                             @@@@@                                                                                 @@@@%                                 @@@@@@%    %@@@@@%%    
       @@@@@@@@        @@@@@                            %@@@#                                                                                 @@@@%                                 %@@@@@@    @@@@@@@     
       @@@@@@@@         #@@@%                           +@@@@@                                                                               *@@@@                                  @@@ %@@   @@@@@@@@     
       @@@%@@@@           %@@#                           @@@@%#                                                                              @@@@@                                  @@@ @@@   @@@@@@%      
       #@@@%@@@@           @@@*                          @@@@@@                                                                              @@@@#                                  @@@ @%%  #@@@@@%       
        @@@ %@@@             ##                          #@@@@@                                                                             %@@@@@                                           @@@@@%        
        @@%  %@@@                                        #@@@@@%                                                                            @@@@@#                                          %@@@@@%        
        %%@#  %@@@*                                      @@@@@@@@                                                                          %@@@@@                                          %@@@@@@         
         %%@   %@@@%                                     @@@@@@@@@                                                                        %@@@@@@                                        @@@@@@@           
          @@@  %@@@@@                                    *@@@@@@@@                                                                        @@@@@@#                                      *@@@@@%             
            @@@-@@@@@@@#                                  @@%@%@                                                                         %@@@@@@@                                  #%@@@@@%                
             %@@@%%@@@@@@@+                               %                                                                             -@@@@@@@#                                #%@@@%%%                  
                %@@@@@@@@@@                                                                                                             *@@@@%@@                                                           
                                                                                                                                                                                                           
                                                                                                                                                                                                           
                                                                                                                                                                                                           
                                                                                                                                                                                                           
                                       %@@@%#       %@%%                                                                                                                                                   
                                       @@@@@        @@@@@@#                                                                                                   @@@@@@                                       
                                      %@@@@          @@@@@#                                                                                        *@@@       @@@@@@                                       
                                      @@@@%          @@@@@@%                                                                                    @@@@@@@        %@@@@%                                      
                                     %@@@@           @@@@@@@        *@@%                                                                        %@@@@@#         #@@@@#                                     
                              %%%@@%@@@@@          #%@@@@@@@      *%@@@                                                                          @@@@@#          #@@@@#                                    
                              #%@@@@@@@#        @%@@@@@@@@@@    @%@@%                                                                #@          @@@@@@            @@@@@%@@@@                              
                                 #*#        #%@@@@@@@   #@@@   #@@%%                                                                @@@@         *@@@@@@            @@@@@@@@@@%                            
                                              @@@%        %     @@                                                                   %%@@@*     @@@@@@@@@@@@+         %@@%%@%                              
                                                                                                                                        @%@@@   @@@@   #@@@@@@@@*                                          
                                                                                                                                          @@@    %            %@                                           
</span>
        `
      ];
      const choice = messages[Math.floor(Math.random() * messages.length)];
      return choice;
    }
  },
  hack: {
    description: '[ REDACTED ]',
    execute: async (args) => {
      if (!args[0]) {
        return 'Usage: hack <target>\nExample: hack nasa.gov';
      }

      const target = args.join(' ');
      const output = document.getElementById('output');

      const randomIP = () => `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      const randomPort = () => Math.floor(Math.random() * 65535);
      const randomHex = () => Math.random().toString(16).substr(2, 8).toUpperCase();

      const messages = [
        `<span class="user">[*] Initializing attack vector...</span>`,
        `<span class="host">[+] Target acquired: ${target}</span>`,
        `<span class="sep">[~] Resolving DNS... ${randomIP()}</span>`,
        `<span class="user">[*] Scanning ports: 21, 22, 80, 443, ${randomPort()}</span>`,
        `<span class="host">[+] Open port detected: 443 (HTTPS)</span>`,
        `<span class="user">[*] Injecting SSL strip payload...</span>`,
        `<span class="sep">[~] Bypassing firewall... [OK]</span>`,
        `<span class="host">[+] Firewall neutralized</span>`,
        `<span class="user">[*] Enumerating subdomains...</span>`,
        `<span class="host">[+] Found: admin.${target}, api.${target}, dev.${target}</span>`,
        `<span class="user">[*] Initiating SQL injection on admin panel...</span>`,
        `<span class="sep">[~] Payload: ' OR '1'='1' --</span>`,
        `<span class="host">[+] Authentication bypassed!</span>`,
        `<span class="user">[*] Escalating privileges to root...</span>`,
        `<span class="host">[+] ROOT ACCESS GRANTED</span>`,
        `<span class="user">[*] Dumping database credentials...</span>`,
        `<span class="sep">[~] DB_USER: admin_${randomHex()}</span>`,
        `<span class="sep">[~] DB_PASS: ${randomHex()}</span>`,
        `<span class="host">[+] Credentials extracted successfully</span>`,
        `<span class="user">[*] Deploying reverse shell...</span>`,
        `<span class="sep">[~] Listener: ${randomIP()}:${randomPort()}</span>`,
        `<span class="host">[+] Shell established!</span>`,
        `<span class="user">[*] Installing backdoor...</span>`,
        `<span class="host">[+] Backdoor installed at /etc/cron.d/.hidden</span>`,
        `<span class="user">[*] Covering tracks...</span>`,
        `<span class="sep">[~] Clearing logs... /var/log/auth.log</span>`,
        `<span class="sep">[~] Clearing logs... /var/log/syslog</span>`,
        `<span class="host">[+] Logs cleared</span>`,
        `<span class="user">[*] Exfiltrating data...</span>`,
        `<span class="sep">[~] Progress: █                    5%</span>`,
        `<span class="sep">[~] Progress: ██                   10%</span>`,
        `<span class="sep">[~] Progress: ███                  15%</span>`,
        `<span class="sep">[~] Progress: ████                 20%</span>`,
        `<span class="sep">[~] Progress: █████                25%</span>`,
        `<span class="sep">[~] Progress: ██████               30%</span>`,
        `<span class="sep">[~] Progress: ███████              35%</span>`,
        `<span class="sep">[~] Progress: ████████             40%</span>`,
        `<span class="sep">[~] Progress: █████████            45%</span>`,
        `<span class="sep">[~] Progress: ██████████           50%</span>`,
        `<span class="sep">[~] Progress: ███████████          55%</span>`,
        `<span class="sep">[~] Progress: ████████████         60%</span>`,
        `<span class="sep">[~] Progress: █████████████        65%</span>`,
        `<span class="sep">[~] Progress: ██████████████       70%</span>`,
        `<span class="sep">[~] Progress: ███████████████      75%</span>`,
        `<span class="sep">[~] Progress: ████████████████     80%</span>`,
        `<span class="sep">[~] Progress: █████████████████    85%</span>`,
        `<span class="sep">[~] Progress: ██████████████████   90%</span>`,
        `<span class="sep">[~] Progress: ███████████████████  95%</span>`,
        `<span class="sep">[~] Progress: ████████████████████ 100%</span>`,
        `<span class="host">[+] Data exfiltrated: 420.69 GB</span>`,
        '',
        `<span class="command-help">╔═══════════════════════════════════════╗</span>`,
        `<span class="command-help">║   HACK SUCCESSFUL - SYSTEM PWNED!     ║</span>`,
        `<span class="command-help">╚═══════════════════════════════════════╝</span>`,
        '',
        `<span class="info-label">JK LOL</span> - This is just a fun easter egg 😎`,
        `<span class="sep">Real hacking requires years of study, not a single command!</span>`
      ];

      for (let i = 0; i < messages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50));
        const line = document.createElement('div');
        line.innerHTML = messages[i];
        output.appendChild(line);
        output.parentElement.scrollTop = output.parentElement.scrollHeight;
      }

      return '';
    }
  }
};

const LOGO = `
<span class="ascii-logo">
                                                                                                                             
                                                                                                                             
                                                                           %@%                                               
                                                                           @@@@                                              
                                                                 #@#       -@@@@+                                            
                                                                  %@@%      #@*@@                                            
                                                                   @@@@#    *@#*@@                  %@@+                     
             =@@               *@@@@@@@@@@@@@#=            %@@+     @@@@@   @@# @@#               *@@@@@                     
              %@@@%#            -@@@%+      =#@@@@@##       #@@@@%=  @@*@@* @@#  #@%           *%@@# *@#                     
               %@+%@@%             *%@@%-         *@@@@%#     *@@@@@* @@ @@*#@#  *@@=        =@@@+   *@@                     
               +@@# *%@@%             %%@@*           *#@@@#    %@##@@+@@=@@%@@   =@%      *@@%*     @@+                     
                #@@+   -@@@%#            %@@              -@@@*  #@* %@@@#-@@@=    @@*   *@@#       *@@                      
                 -@@      *@@@@%           @@#               *%@@%%@% =%@@+*@#      @@ #@@%         %@+                      
                  *@@         #%@@@*        @@=                 #@@@@#  #%#         %@@@%           @@                       
                    @@+           #@@@%=    -@@                   *@@@               %@            *@@                       
                     #@@*             %@@@@#*#@                                                    @@=                       
                       %@@%               #%@@@#                                                   %@                        
                         #@@@@#-                                                                   @@@@@@%                   
                         =#@@@@@@%                                                                      =%@@@*               
                   %#@@@@@@+                                               +@@@@%##%#%@@@=                  #@@@@            
              -%%@@@%*                                                        %@       =@                      %@@@#         
           *@@@%#=                                                             *@@      @@                     @@@@@@@*      
       @%@@@+                                                                     *@@%**  %@@@%                %@@=*@@@@@@   
   =%@@@%=                                                                            =-                         @@#         
  @@@@@@@@@%+                            *@#                                                             @@#      %@@        
          *#@@@@@=                      #@@@                                  @%                         @@@@@@%-   @@@+     
               -#@@@@@@                %@@@*        *#     #@@*        #@@*   @@@                         #@# =#@@@@@@@@@%   
                    +@@      =@@     +@@*@@=   -@@ #@@@  -@@#%@#      =@@%@@- =@@@+    @#       +-     #   %@#       -***+   
                    %@+      @@#    #@% -@@   %@@@-%@#@@@@@*  %@#     @@+ *%@# @@@@%   @@%     @@@%   @@@%  @@%              
                   =@@      @@%    @@+  *@%  #@@@%%@# @@@@     #@%    #@+   *@@-@@@@@  +@@%    %@@@* #@%+@@@*%@@             
                   %@-    #@@@+  #@@    #@+@@@=@@@@%  %@@       +@@#  #@      @@%@@#@@  @@@*  -@@ @@#=@@   +@@@@@*           
                  %@#    #@@@% %@@#    %@@@%# *@@%   =@@+         #@@##@   -===*@@@@#@@*@@@@# -@@  @@%#@%      =*            
                 %@%    %@@@# #@@*    @@@@##*=*@      %             *@@@@@@@@@@@@@@@@+@@%@@#@# @@   %@@@@:     +@@%          
                #@#   +@@+@@+@@+ *@@@@@@@@@@@@@@@@%@              *@@@@@@@@@@@@@@@@@@@@@@@@=%@%%@    *@@@@  %%@%  *@+        
               %@*  %@@#=@@@@%%%@@@@@@@@@@@@@@@@@@@@@%           %@@@@@@@@@@@@@@@@@@@@@@@@@@+%@@@+     #@@%@@#    -@*        
              @@#*@@@@  %@@%#%@@@@@@@@@@@@@@@@@@@@@@@@@*        #@@@@@@@@@@@@@@@@@@@@@@@@@##  #@@+       ##+  +@  %@         
            -@@@@@*    @@@  =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     #         **  #* -@#         
            @@%-            *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@               *@  %%  @%          
                             %@@@@@@@@@@@@@@@@@@@@@@@@@%          #@@@@@@@@@@@@@@@@@@@@@#                %* %# *@%           
                              %@@@@@@@@@@@@@@@@@@@@@@@*             #%@@@@@@@@@@@@@@@%#                  ##@* *@#            
                                -@@@@@@@@@@@@@@@@@@@                      -+***+-                        =+  *@#             
                          %@%       =%@@@@@@@@@#=                                                    *@     @@+              
                         %@                                                                          #@*  %@%                
                        #@+                                                                           %@@@#                  
                        %@-                                       +#@%+*                                                     
                        =@@                           +#%%@%@@@#+=  #@@*                      *@                             
                         #@@#                          #@@*        %@%+                      %@%                             
                           +@@+                          +@@#   =@@@+                     *@@#                               
                             +@@@#*                         +#%%*                     +*@@@+                                 
                                -@@@@%%+                                         =%%@@@@+                                    
                                     ##%@@@@@@*=                         -+#@@@@@@#%                                         
                                             -=#@@@@@@@@@@@@@@@@@@@@@@@@@%*=                                                 
                                                                                                                             
                                                                                                                             
                                                                                                                             
</span>
`;

const LOGO2 = `
<span class="ascii-logo">
  ##        #                                                                          ##        ## 
   %%#       %%%                                                                    *%%%       %%%  
   *%%%%%%    #%%%%#                                                             #%%%%#    %%%%%%   
    #%%%%%%%%%%#%%%%%%#                                                       %%%%%%#%%%%%%%%%%%    
      %%%%%%%%%%%%%%%%%%%%                                                 #%%%%%%%%%%%%%%%%%%%     
       %%%%%%%%%%%%%%%%%%%%%                                            #%%%%%%%%%%%%%%%%%%%%#      
         %%%%%%#  #%%%%%% %%%%*                                       %%%%# %%%%%%#  %%%%%%#        
        #  %%%%%%%%##%%%%%%   %#                                     ##  #%%%%%% %%%%%%%%%  #       
         %%%#%%%%%%% %%%%%%%%#   #%%%%%%%####*=       +*####%%%%%%%    %%%%%%%% #%%%%%%#%%%#        
            %%%%%%%%# %%%%%%%%%%#   %%%%%%%%%%%%%%%%%%%%%%%%%%%%#   %%%%%%%%%%  %%%%%%%%#           
           %%%%%%%%%%# #%%%%%%%%%%%%% *%%%%%%%%%%%%%%%%%%%%%%% #%%%%%%%%%%%%%  %%%%%%%%%%%          
          %%%%%%%%%#%%%  %%%%%%%%%%%%%%%%##%%%%%%%%%%%%%%##%%%%%%%%%%%%%%%%%  %%#%%%%%%%%%%         
         %%%%%%#%%%%%##   *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   # #%%%%%#%%%%%#        
        %%%%%%%%%  %%%%#    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%     %%%%%  %%%%%%%%#       
       %%%%%%#%%%%            #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%            *%%%%%%%%%%       
       %%%%%%%# %%%# #%%%%%#    #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#    %%%%%%* %%%# %%%%%%%#      
       %%%%%%%%%    %%%%%%%%%%    #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%     %%%%%%%%#%   #%%%%%%%%%      
      #%%%%%# *%%%     %%%%%%%%*    #%%%%%%%%%%%%%%%%%%%%%%%%%%%     %%#%%%%%%    #%%%  %%%%%%      
      #%%%%%%%%       #%%%%%  %%%%     %%%%%%%%%%%%%%%%%#%%%%%    #%%%   %%%%%       #%%%%%%%%      
      #%%%%#+         %%%%%  %%%%%%%     #%%%#%%%%%%%%##%%%     #%%%%%%#  %%%%         =##%%%%      
      #%%%%%%%%#      #%%%%  %%%%%%%%%     *%%%%%%%%%#%%%     #%%%%%%%%   %%%%      *%%%%%%%%%      
       %%%%%%%#%       %%%%%  %%%%%%%#  %%    %%%%%%%%#    %#  %%%%%%%#  %%%%%      %%%%%%%%%%      
       %%%%#%%%%%      #%%%%%         #%%%%#    %%%%%   %%%%%#         #%%%%%      #%%%%%%%%%#      
       #%%%%%%%%        %%%%%%%%###%%%%%%%%%%    #%     %%%%%%%%%###%%%%%%%%        *%%%%%%%%       
        #%%#  +*  #*      %%%%%%%%%%%%%%%##%#           %%*%%%%%%%%%%%%%%%#      *   #   %%%#       
         %%%%%*#%%#         #%%%%%%%%%%# %%%  %* #%  #  #%%# %%%%%%%%%%%          %%% %%%%%%        
         #%%%%%%%   #           #%%%#  ###%   %% %%# %#  #% #   #%%%#          *#  #%%%%%%%         
          %%%%%% %%%   *                     *%% %%%%%%                         #%%# %%%%%          
        %%%%%%%%%%%  %##% ##  #      #       %%%%%%%%%%       %       # #% %% %%  %%%%%%%##%%       
        %%%%%%%%%*%%% %% #%% %% # %  %% %    %%%%%%%%%%     # %% %%+  %# %% %%# %%#%%%%%%%%%%       
       %%%%#%%%%%%%*%%% #%% %%## %%#%%%#%    #%%%%%%%%%     % %% %%## %%#*%% #%%%%%%%%%% %%%%       
       #%%%#%%%%%%%%%#%%%%#%%%  %%%#%%%%%     %%%%%%%%%     %#%% %%%% #%% %%#%##%%%%%%%%%#%%%       
        %%%%%%%%%%%#%%%*## %%  %%#% %%#%      %%%%%%%%      %%#% %%%%  #%% # %%%%%%%%%%%% %%%       
        #%%%%%#%%%%%%%#  #%%#  %%     %        %%%%%%#        #     %%  #%##  %%%%%%%%%%% %%#       
         %%#%%+%%%%%%%  %%%#  ##               *%%%%%                #   #%%#  %%%%%%#%%% %#        
           #%% #%%%%%  %%#                      %%%%                       %%#  %%%%% %%%           
            %%  %%%%% %%%#    #   %%       #%    #%     %        %   #     %%%  %%%%# %%#           
            #%  #%%%%#%%%%   %%  %%    %   #%%         %%#  %#   %%  %%   #%%%%%%%%%  #%            
                 #%%%%%%%%  #%%=%%%   %%   %%%        %%%%  %%%  #%%%%%%  %%%%%%%%%                 
                  #%%%%%%%  %%%%%%%#%#%%* *%%%%       %%%#  #%% % %%%%%%# %%%%%%%%                  
                   %%%%%%#  %%%%%%##%%%%%  %%%%       %%%%  %%%%% %%%%%%#  %%%%%%                   
                     %%%%=  %%%%%%# %%%%%# #%%%       %%%# %%%%%% #%%%%%*  %%%%#                    
                       %%    %%%%%# %%%%%%  %%  %  %% #%# %%%%%%  %%%%%%   %%#                      
                              %%%%%  %%%%%% *# #%% %% #%  %%%%%%  %%%%%                             
                               #%%%   %%%%%    #%%%%%    *%%%%#  #%%%                               
                                  %+   %%%%     %%%%%    #%%%    ##                                 
                                         %%     #%%%*    *%%                                        
                                                 %%%                                                
                                                  #                                                 
</span>
`

const LOGO3 = `
<span class="ascii-logo">
                                                               %                                    
                                                                %%                                  
                                                                %%%                                 
                                                @               %%%%@                               
                                                 %%             %%%%%                               
                                                 %%%%          %%%%%%%                              
                                                 %%%%         %%%%%%%%                              
                                                %%%%%%       %%%%%%%%%                              
                                               %%%%%%       %%%%%%%%%    %@                         
                                              %%%%%%%     %%%%%%%%%%%     %%                        
                                            %%%%%%%%     %%%%%%%%%%%     %%%%                       
                                          %%%%%%%%%    %%%%%%%%%%%%     %%%%%                       
                                         %%%%%%%%     %%%%%%%%%%%%     %%%%%%                       
                                       %%%%%%%%     %%%%%%%%%%%%      %%%%%%%                       
                                     %%%%%%%%     %%%%%%%%%%%%%     %%%%%%%%                        
                                   %%%%%%%      %%%%%%%%%%%%      %%%%%%%%                          
                                  %%%%%@      %%%%%%%%%%%%     %%%%%%%%%%                           
                                  %%%@       %%%%%%%%%%      %%%%%%%%%                              
                                 %%%       @%%%%%%%%      %%%%%%%%%                                 
                                 %%       %%%%%%%       %%%%%%%%                                    
                                          %%%%%        %%%%%   %%%%%%%                              
                                         %%%%         %%%           %%%%%%%                         
               %                         %%          %%                %%%%%%%%                     
            @%%                         %%           %                  %%%%%%%%%                   
           %%%                                                          %%%%%%%%%                   
           %%%%                                                        %%%%%%%%%%                   
            %%%%%@                                                  %%%%%%%%%%%%                    
              %%%%%%%%%%                                      %%%%%%%%%%%%%%%%                      
          %      @%%%%%%%%%%%%%%%%                  @%%%%%%%%%%%%%%%%%%%%%         %%%%%%%%%%%%     
          %             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%            %%%%%%%%%%%%%%%%%   
          %%                     %%%%%%%%%%%%%%%%%%%%%%%%%%                   %%%%%%%      @%%%%%%% 
          %%                                                                 %%%%%%          %%%%%%%
          %%%                                                               %%%%%@            %%%%%%
          %%%                                                              %%%%%%             %%%%%%
           %%%                                                            %%%%%%             @%%%%%%
           %%%                                                           %%%%%%              %%%%%%%
           %%%%                                                         %%%%%%%            %%%%%%%%%
            %%%%                                                       %%%%%%%   %%%%%@%%%%%%%%%%%% 
            %%%%%                                                     %%%%%%%    %%%%%%%%%%%%%%%%%  
             %%%%%                                                   %%%%%%%@     %%%%%%%%%%%%%%    
              %%%%%%                                                %%%%%%%@       %%%%%%%%%%       
               %%%%%%                                             %%%%%%%%                          
                %%%%%%%                                         @%%%%%%%%                           
                  %%%%%%%@                                    %%%%%%%%%%                            
                   %%%%%%%%%                                %%%%%%%%%%%  %%                         
    %%               %%%%%%%%%%%@                       %%%%%%%%%%%%%         %%%%%%%%              
  %%                   %%%%%%%%%%%%%%%%%@      %%%%%%%%%%%%%%%%%%%%               %%%%%%%           
%%%                       %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                    %%%%%%         
%%%                          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                       %%%%%%@       
%%%                               %%%%%%%%%%%%%%%%%%%%%%%%%                           %%%%%%%       
%%%%%                                   @%%%%%%%%%%%                                 %%%%%%%%       
  %%%%%%                                                                            %%%%%%%%%       
    %%%%%%%                                                                     %%%%%%%%%%%%        
       %%%%%%%%%                                                           %%%%%%%%%%%%%%%          
           %%%%%%%%%%%%%@                                        @%%%%%%%%%%%%%%%%%%%%%%            
               @%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@               
                      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                     
                              %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@                            
</span>
`

const LOGO4 = `
<span class="ascii-logo">                                                                                  
                                                          @@@@@@@                                   
                                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                             
                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                           
                                @@@@@ @@@@@@@@@@@@@                  @@@@@                          
                               @@@@    %%%@%        @@@                @@@@                         
                              @@@@                 @@@@                 @@@@                        
                             @@@@@                 @@@@                 @@@@                        
                             @@@@                   @@@@@                @@@@                       
                            @@@@@                     @@@@@@@@ @@        @@@@                       
                            @@@@                        @@@@@@@@          @@@@                      
                            @@@@                                          @@@@                      
                           @@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     
                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     
                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@                     
                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@      @@@@          
                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@  @@@@@@@@@@                      @@@@@
                @@@@@@@@@@@                               @@@@@@@       @@@@@@@@@@@@@@@@@@@@@@  @@@@
     @@@@@@@@@@@@@@@@@@@                            @@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
   @@@@@@@@@@@@@@@@@                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@                                    @@@@@@@@@@@@@@@@@@@   @@@@      @@@@@@@@@@@@@@@@@@@@@   
    @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@%@@       @@@@@@@@@@@@@@@@@      
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@              @@@@@@@@@@@@@@         
                @@@@@@@@@@@@@@@ @@@         @@       @@@@@@@@@@@              @@@@@@@@              
                       @@@@@@@       @  @@         @@@@@@@@@@@@@               @@@                  
                       @@@@@@@@@   @@@ @@        @@@@@@@@@@@@@@@          @@@@@@@@@                 
                       @@@@@@@@@@  @@@@@@     @@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@                
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@              
                    @@@@@@@ @@@@@@@@    @@@@@@@@@@@@@@@@@@@@@      @@@@@          @@@@@@            
                   @@@@      @@@@@          @@@@@%@@@@@@@@@      @@@             @@ @@@@@           
                 @@@@    @@@@@@@              @@@@@@@        @@@@@                @@@@@@@@          
                 @@@ @@   @@@@@@        @@@      @@@@@@@@@@@@@@                     @@@@@@@         
                 @@@@@@@@@@@@@@      @@@@@@                         @@@@@@@         @@@@@@@         
                  @@@@@@@@@           @@@                             @@@@@@@        @@@@@@         
                 @@@@@@@                                          @@@@@@@ @@@        @@@@           
      @@@@@@@@@@@@@@@                                           @@@@@@             @@@@@@           
   @@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@               @@@@@@@           
 @@@@@                    @@@@@@@                          @@@@@     @@@@@@@     @@@@@@@            
 @@@@      @@@@@@@@             @@@@                     @@@@@  @@@@@@@@        @@@@@@@             
  @@@@@@@@@@@@@@@@@@@@@@@                              @@@@@@@@@@@@@          @@@@@@@@              
   @@@@@@@@@@@@   %@@@@@@@@@@@@                      @@@@@@@@@@@@           @@@@@%                  
           @@@@@@          @@@@@@@@@              @@@@@@@@@@@%            @@@@@                     
             @@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@            @@@@@@@                      
                  @@@@@@@@@@@@@@@@@    @@@@@@@@@ @@@@@@@@               @@@@@                       
                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@                @@@@@                        
                                   @@@@@@@@@@@@@@@@@@                @@@@@@                         
                                            @@@@@@@                 @@@@@@                          
                                           @@@@@@@                  @@@@@                           
                                         @@@@@                     @@@@@                            
                                        @@@@@                     @@@@@                             
                                      @@@@@                      @@@@@                              
                                    @@@@@@                       @@@@@                              
                                  @@@@@@                        @@@@@                               
                                 @@@@@                          @@@@@                               
                                @@@@@                           @@@@@@                              
                              @@@@@                             @@@@@@@@                            
                            @@@@@@                              @@@@@@@@@@@                         
                           @@@@@@                                @@@ @@@@@@@@@                      
                          @@@@@                                         @@@@@@@@@@@                 
                         @@@@@                                             @@@@@@@@                 
                        @@@@@                                               @@@@@@                  
                       @@@@@                                             @@@@@@@                    
                      @@@@@                                @           @@@@@@@                      
                     @@@@@                                @@        @@@@@@@@                        
                     @@@@                                 @@@    @@@@@@@@@                          
                     @@@@@                                @@@@@@@@@@@@@                             
                     @@@@@@                               @@@@@@@@@@                                
                      @@@@@@                           @@@@@@@@@                                    
                       @@@@@@                     @@@@@@@@@@@                                       
                         @@@@@@             @@@@@@@@@@@@@@                                          
                          @@@@@@@     @@@@@@@@@@@@@@@@                                              
                            @@@@@@@@@@@@@@@@@@@@@                                                   
                             @@@@@@@@@@@@@@                                                         
                               @@@@                                                                 
</span>
`

const LOGO5 = `
<span class="ascii-logo">
                  @@@@@@@@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@@@@@@@@@@@@@@
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@
       @@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@  @@@@@@@@@@@@@ @@
      @@@@@@@@@@@@@@@                @@@@@@@@@@@  @@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@                      @@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@                          @@@@@@@@@ @@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@   @@@@@@@@                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@  @@@@@@@@                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@     @@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@   @@@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@  @@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@     @@@@      @@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@   @@@@       @@@@@@@@@@@         @@@@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@   @@@        @@@@@@@@@@@@@   @@@  @@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@ @@@@  @@    @@@@@@@@@@@@@@   @@@   @@@@@@@ @@@@@@@@
       @@@@@@ @@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@         @@   @@@@@
        @@@@@  @@@@@@@@@@@@@@@@@@@@     @@@@@ @@@@@@@@@@@@@        @@@@@@@@
         @@@@@  @@@@@@@@@@@@@@@@@@@       @@@  @@@@@@@@@@@@@   @@@@@@@@@@@@@
           @@@@  @@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
             @@   @@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@@@@  @@@@@@@@@
                   @@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@       @@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@
                       @@@@ @@@@@@@@       @@@@@@@@@@@@@@   @@@@@@@   @@@@@@@@@                 @
                        @@@  @@@@@@@      @@@@@@@   @@@@@@   @@@@@@@@@@@@@@@@@@                 @@
                          @  @@@@@@@      @@@@         @@@   @@@@@@@@@@@@@@@@@@                 @@
                              @@@@@       @@   @@@@@@@   @   @@@@@@@@@@@@@@@@@@                 @@
                              @@@@@        @  @@@@@@@@@      @@@@@@   @@@@@@@@                 @@@
                              @@@@             @@@@@@@@@     @@@@@@@@@@@@@@@@@                 @@@
                        @@   @@@@              @@@@@@@@@@    @@@@@@@@@@@@@@@@@               @@@@
                      @@@    @@                 @@@@@@@@@@@    @@@@@@@@@@@@@@               @@@@
                    @@@@                         @@@@@@@@@@@@    @@@@@@@@@@@@             @@@@@
                   @@@@@                           @@@@@@@@@@@@       @@@@@@           @@@@@@@
                   @@@@@                            @@@@@@@@@@@@@@@@              @@@@@@@@@@
                   @@@@@                              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                   @@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                   @@@@@@                                   @@@@@@@@@@@@@@@@@@@@@@@@@
                   @@@@@@@@                        @@@@@@        @@@@@@@@@@@@@@
                    @@@@@@@@@                    @@@@@@@@@@@@@
                    @@@@@@@@@@@               @@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@
                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                            @@@@@@@@@@@@@@@@@@@@@@@@@ @@@@
                                @@@@@@@@@@@@@@@@@@@@@@
                                    @@@@@@@@@@@@@@@
</span>
`

const LOGO6 = `
<span class="ascii-logo">
                    #+                                                ***                           
                  +@@@@@@%=                                         #@@@@@                          
                  %@@@@@@@@@@#                                   *@@@@@@@@=                         
                  %@@@@@@@@@@@@%%                              @@@@@@@@@@@%                         
                 -@@@@@@@@@@@@@@@@%                           @@@@@@@@@@@@@                         
                 #@@@@@@@@@@@@@@@@@@@+#@@@@@@@@@@@@@@#=     @@@@@@@@@@@@@@@=                        
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                        
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                        
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                        
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                        
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                      
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-                   
              +%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 
             *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%              
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%###@@@@@@@@@%             
           #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##                #@@@@@            
          %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%                       %@@@@           
         #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                            @@@@%          
        *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                @@@@          
        #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                                  #@@@=         
       +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@                                    #@@@*         
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#                                      #@@@#         
      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                        #@@@*         
      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                          #@@@=         
      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                           @@@@          
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                     %@@@@@@@               @@@@          
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                     @@@@@@@@@@%             =@@@#          
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     #@@@@@@@@@@@+            *@@@%          
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                    @@@@@@@@@@@@@@@@           @@@@@          
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                 #@@@@@@@@@@@@@@@@@@@@%%@#     @@@@*          
      %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          %*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    +@@@@           
      #@@@@@@@@@@@@@@@@@@@@@@@@@@@@%       *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=   *##@@           
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*     =@@@@@@@@@@@@@@@@@@@@@@@%       @@@@%*     ##%@@@@%%*      
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@      #=      =++***++=  %@@@@@@#   *@@@@@%%@    *#***#%@@@      
       +@@@@@@@@@@@@@@@@@@@@@@@@@@*     #*%@@@@@@@@@@@@@@@@@@@@@@@@@  #@@@@@@@@%    +#              
        #@@@@@@@@@@@@@@@@@@@@@@@@@=     @@@@#@*     =%@@@#@%%@@@@@@@@@@@@@@@@=     %#%@@@@@*        
        *@@@@@@@@@@@@@@@@@@@@@@@@@=     **  *@%@@@@@@@#  #@@@@@@@@@@@@@@@@@@@%    @@#    *@@@@=     
         -@@@@@@@@@@@@@@@@@@@@@@@@*      @@@@@@@@@@# =@@@@@@@@@@@@@@@@@@@@@@@     %@@@*             
          #@@@@@@@@@@@@@@@@@@@@@@@@       %@@@@@@# *@@@@@@@@@@@@@@@@@@@@@@@#     @@@@@              
           *@@@@@@@@@@@@@@@@@@@@@@@%       #@@@* *@@@@@@@@@@@@@@@@@@@@@@@@      %@@@#               
            *%@@@@@@@@@@@@@@@@@@@@@%         # +%@@@@@@@@@@@@@@@@@@@@@@%      #@@@@%                
              @@@@@@@@@@@@@@@@@@@@@@@           #@@@@@@@@@@@@@@@@@@@@#       %@@@@#                 
                @@@@@@@@@@@@@@@@@@@@@#              *@@@@@@@@@@@%*          #@@@@%                  
              ##  #@@@@@@@@@@@@@@@@@@@@*                                  %@@@@%                    
              %@@@@* @@@@@@@@@@@@@@@@@@@%                               *%@@@@@                     
                #@@@@%%@@@@@@@@@@@@@@@@@@%                             #@@@@%+                      
                  %@@@@@@@@@@@@@@@@@@@@@@@@@                         #@@@@@#                        
                    #@@@@@@@@@@@@@@@@@@@@@@@@@                     @@@@@@%                          
                      +@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@#                            
                          #@@@@@@@@@@@@@@@@@@@@@@              #@@@@@#                              
                             +@@@@@@@@@@@@@@@@@@@@@           @@@@@%                                
                                #%@@@@@@@@@@@@@@@@@@%        #@@@@#                                 
                                    #%@@@@@@@@@@@@@@@%      %@@@@@%                                 
                                        #@@@@@@@@@@@@@@#    %@@##@@                                 
                                            %@@@@@  #@@@-   @@@ #@#                                 
                                              #@@@@@ #@@@= =@@@ @@+                                 
                                                 @@@# %@@@ +@@@ @@                                  
                                                   %@% @@# =@@% @@                                  
                                                    ##  @# -@@# @@                                  
                                                            %%#  =                                  
</span>
`

const NEOFETCH_INFO = `
<span class="info-label">Guest@Jishnu's-Portfolio</span>
<span class="info-label">------------------------</span>
<span class="info-label">OS<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: JishnuSetia-OS</span></span>
<span class="info-label">Host<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: Web Terminal</span></span>
<span class="info-label">Kernel<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: JavaScript Runtime</span></span>
<span class="info-label">Uptime<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: Since curiosity</span></span>
<span class="info-label">Packages<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: 582 (aur)</span></span>
<span class="info-label">Shell<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: portfolio-vsh</span></span>
<span class="info-label">WM<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: Hyprland</span></span>
<span class="info-label">CPU<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: Human + Silicon + ☕️</span></span>
<span class="info-label">Memory<span style="font-family: 'Fira Code', 'Courier New', Courier, monospace;color: var(--text-color);">: Enough</span></span>
<div class="color-band">
  <span class="color-block color-1"></span><span class="color-block color-2"></span><span class="color-block color-3"></span><span class="color-block color-4"></span><span class="color-block color-5"></span><span class="color-block color-6"></span>
</div>`;

function updatePrompt() {
  const ps1 = `<span class="user">Guest</span>@<span class="host">Jishnu's-Portfolio</span><span class="sep">:</span><span class="host">${getPathString()}</span><span class="sep">$</span>`;
  if (promptDisplay) promptDisplay.innerHTML = ps1;
  return ps1;
}

function printToTerminal(text, isCommand = false) {
  const line = document.createElement('div');
  if (isCommand) {
    line.innerHTML = `<span class="prompt-line">${updatePrompt()} ${text}</span>`;
  } else {
    line.innerHTML = text;
  }
  output.appendChild(line);
  terminalContainer.scrollTop = terminalContainer.scrollHeight;
}

function showNeofetch() {
  const logos = [LOGO, LOGO2, LOGO3, LOGO4, LOGO5, LOGO6];
  const selectedLogo = logos[Math.floor(Math.random() * logos.length)];
  const neofetchContainer = `
    <div class="neofetch-container">
      <pre class="ascii-art-small">${selectedLogo}</pre>
      <div class="info-container">${NEOFETCH_INFO}</div>
    </div>
  `;
  printToTerminal(neofetchContainer);
  printToTerminal("Welcome to Jishnu Setia's Portfolio. Type <span class='command-help'>'help'</span> to see available commands.");
  printToTerminal(" ");
}

async function handleCommand(cmdLine) {
  const trimmedCmd = cmdLine.trim();

  printToTerminal(cmdLine, true); // Use original cmdLine (can be empty string)

  if (trimmedCmd === '') {
    historyIndex = commandHistory.length;
    return;
  }

  const parts = trimmedCmd.split(' ');
  const cmd = parts[0];
  const args = parts.slice(1);

  if (COMMANDS[cmd]) {
    const result = await COMMANDS[cmd].execute(args);
    if (result) {
      printToTerminal(result);
    }
  } else {
    printToTerminal(`<span style="color: var(--error-color)">Command not found: ${cmd}. Type 'help' for a list of commands.</span>`);
  }

  // History management
  if (commandHistory[commandHistory.length - 1] !== cmdLine) {
    commandHistory.push(cmdLine);
  }
  historyIndex = commandHistory.length;
}

function handleTabCompletion() {
  const val = input.value;
  const parts = val.split(' ');

  if (parts.length === 1) {
    // Complete commands
    const matches = Object.keys(COMMANDS).filter(c => c.startsWith(parts[0]));
    if (matches.length === 1) {
      input.value = matches[0];
    } else if (matches.length > 1) {
      const matchText = matches.join('  ');
      printToTerminal(trimmedInput(), true);
      printToTerminal(matchText);
    }
  } else {
    // Complete files/dirs or themes
    const cmd = parts[0].toLowerCase();

    // Check for theme command first
    if (cmd === 'theme') {
      const partial = parts[parts.length - 1];
      const themes = ['retro', 'matrix', 'dracula', 'nord', 'monokai', 'gruvbox', 'tokyonight', 'solarized'];
      const currentTheme = document.body.getAttribute('data-theme') || 'retro';

      if (!partial || partial === '') {
        printToTerminal(trimmedInput(), true);
        const themeList = themes.map(t => {
          if (t === currentTheme) {
            return `<span class="active-theme">${t}</span>`;
          }
          return t;
        }).join('  ');
        printToTerminal(themeList);
        return;
      }
      const matches = themes.filter(t => t.startsWith(partial));
      if (matches.length === 1) {
        parts[parts.length - 1] = matches[0];
        input.value = parts.join(' ');
      } else if (matches.length > 1) {
        printToTerminal(trimmedInput(), true);
        const matchList = matches.map(t => {
          if (t === currentTheme) {
            return `<span class="active-theme">${t}</span>`;
          }
          return t;
        }).join('  ');
        printToTerminal(matchList);
      }
      return;
    }

    // Path completion logic
    const token = parts[parts.length - 1];
    let pathPrefix = '';
    let searchPartial = token;
    let scanDirObj = null;

    // 1. Identify Directory to Scan
    const lastSlashIndex = token.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      pathPrefix = token.substring(0, lastSlashIndex + 1); // e.g., "bin/" or "/etc/"
      searchPartial = token.substring(lastSlashIndex + 1);

      const resolved = resolvePath(pathPrefix);
      if (resolved) {
        if (resolved.fullPath.length === 0) {
          scanDirObj = VFS; // Root
        } else if (resolved.dir && resolved.dir.children) {
          scanDirObj = resolved.dir.children[resolved.name];
        }
      }
    } else {
      // Current directory
      scanDirObj = getDir(currentPath);
    }

    if (!scanDirObj || scanDirObj.type !== 'dir') return;

    let items = Object.keys(scanDirObj.children || {});

    // 2. Filter Command constraints
    // For 'cat', we now ALLOW directories so user can tab through them, but distinct them later?
    // Actually, standard terminals let you tab complete directories even for 'cat', it just fails if you execute.
    // So we don't filter out directories for 'cat'.

    if (cmd === 'cd') {
      items = items.filter(i => scanDirObj.children[i].type === 'dir');
    }
    // Logic for other commands: allow all valid paths

    // 3. Filter Hidden
    if (!searchPartial.startsWith('.')) {
      items = items.filter(i => !i.startsWith('.'));
    }

    // 4. Find Matches
    const matches = items.filter(i => i.startsWith(searchPartial));

    // 5. Apply Completion
    if (matches.length === 1) {
      const matchName = matches[0];
      const matchObj = scanDirObj.children[matchName];
      const isDir = matchObj.type === 'dir';

      parts[parts.length - 1] = pathPrefix + matchName + (isDir ? '/' : '');
      input.value = parts.join(' ');
    } else if (matches.length > 1) {
      const matchText = matches.map(m => {
        const isDir = scanDirObj.children[m].type === 'dir';
        return m + (isDir ? '/' : '');
      }).join('  ');
      printToTerminal(trimmedInput(), true);
      printToTerminal(matchText);
    }
  }
}

function trimmedInput() {
  return input.value;
}

// Initialize
window.addEventListener('load', () => {
  updatePrompt();
  showNeofetch();
  input.focus();
});

const displayText = document.getElementById('display-text');
const displayTextTrailing = document.getElementById('display-text-trailing');
const cursor = document.getElementById('cursor');

function updateDisplay() {
  if (!displayText || !cursor || !displayTextTrailing) return;

  const val = input.value;
  const match = val.match(/ /g);
  // Calculate cursor position
  const selectionStart = input.selectionStart;

  const left = val.slice(0, selectionStart);
  const char = val.slice(selectionStart, selectionStart + 1) || ' '; // Default to space if at end
  const right = val.slice(selectionStart + 1);

  displayText.textContent = left;
  cursor.textContent = char;
  displayTextTrailing.textContent = right;
}

// Input handling
// Update display on any action that changes value or cursor position
['input', 'keydown', 'keyup', 'click', 'select', 'focus'].forEach(evt => {
  input.addEventListener(evt, () => {
    // frequent updates, verify safe
    // setTimeout to ensure selectionStart is updated after keydown
    if (evt === 'keydown') {
      setTimeout(updateDisplay, 0);
    } else {
      updateDisplay();
    }
  });
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value;
    handleCommand(cmd);
    input.value = '';
    updateDisplay();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
      // Move cursor to end
      setTimeout(() => {
        input.selectionStart = input.selectionEnd = input.value.length;
        updateDisplay();
      }, 0);
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
      setTimeout(() => {
        input.selectionStart = input.selectionEnd = input.value.length;
        updateDisplay();
      }, 0);
    } else {
      historyIndex = commandHistory.length;
      input.value = '';
      updateDisplay();
    }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    handleTabCompletion();
    updateDisplay();
  }
});

// Keep focus on input
document.addEventListener('click', (e) => {
  // Check if click is on a link or interactive element to avoid stealing focus
  if (e.target.tagName !== 'A' && !e.target.closest('.link')) {
    input.focus();
  }
});
