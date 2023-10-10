-- With react native we have to deal with security for all 3 platforms
    1. Android
    2. ios
    3. react native(javascript)


## 1. security in local storage (encrypting data)

        --- lets take example of secure store(of expo)


                                ios                          Android                           Best practice
                        

Data store encrypted           YES (Keychain)                      YES                               YES
                                                        (shared preferences + keystore)



Data persists across            YES                                 NO                              NO (should erase data 
app reinstalls                                                                                              across reinstalls)


Hardware backed                 YES                               Depends on device vendor              YES
encryption


Data decrypted only        decrypted when device                         YES                              YES (should decrypt data
before usage                  unlocked                                                                         just before use)




## 2.  Managing android permissions

   Android : You can add permission in multiple files
            i.e. we can define permission in manifest file , and each dependency can have its own manifest file
                    , creating multiple files for permission.

   React native : It is common practice to use third party solutions through dependencies.
                    (each of them may add new permission to your project)
    
    so dependencies are headache.
    so we should manage dependencies carefully.



## 3. XSS attacks  (javascript/react native specifics)

xss :: cross site scripting - > when attacker is able to inject code into your website(app)

        is xss possible in react native ??
    - XSS possibilty decreases by design
    - but XSS is still possible

    eval()
    - we can steal all the data from local storage (async storage) by exploiting eval based injection and accessing 
            react native apis.



## 4. Jailbreak and Root detection
    - it is not easy for even native android or ios teams to manage theses.
    - it is even harder for react native teams

    * there r no ready to go react native solutions so
    a. implment on your own    OR
    b. Use third party solutions for native platform and use bridging code.



## Testing security
https://github.com/OWASP/owasp-masvs  -- mobile application security verification standards
https://github.com/OWASP/owasp-mastg   -- mobile application security testing guides

        * How do we test RN app security
        1. Use MASVS requirements
        2. review javascript dependencies source code to understand native controls behind it.
        3. Use ASVS and WSTG to cover javascript specific vulnerabilities like XSS.


https://www.cossacklabs.com/blog/react-native-app-security/
https://github.com/OWASP/owasp-masvs/discussions/557