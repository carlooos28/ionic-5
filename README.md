# Ionic 5
## Consume Servicio Web - Lista de Usuarios 

```javascript
  https://reqres.in/api/users
```

Resuelve issue git  

```git
git pull --allow-unrelated-histories origin master
```

### Requerimientos para instalación Ionic 5

<a href="https://nodejs.org/en/" target="_blank">
Instalar nodeJs > 10 
</a>

Verificar versiones Node | Npm

```javascript
node --version 
npm --version 
```

Instalación Ionic

```javascript
npm install -g ionic 
```

Crear App Ionic

```javascript
ionic start 
```

Crear App Ionic con esqueletos

```javascript
ionic start nameapp sidemenu
ionic start myApp tabs
ionic start myApp blank
```

Inicializar App en Ionic

```javascript
ionic serve 
```

Emulador Ionic Android | Ios

```javascript
ionic serve --lab
```

Verificar lista de templates en Ionic

```javascript
ionic start --list
```

Otra manera | Crear App Ionic seleccionando esqueleto

```javascript
ionic start 
```

Crear un servicio utilizando generadores 

```javascript
ionic generate service services/bici-users
```

Ciclo de vida de los componentes Ionic 

```javascript
ionViewDidEnter
```

Compilación para Android 

```javascript
ionic cordova build android 
```

https://ionicframework.com/docs/building/running

Configuración Compilación Ubuntu 

```javascript
Instalar JDK JAVA
Instalar Android Studio 
config variables entorno 

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04

export ANDROID_HOME=/<installation location>/android-sdk-linux
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

config 
https://stackoverflow.com/questions/36198165/failed-to-find-android-home-environment-variable


sudo apt install openjdk-8-jdk-headless 

https://www.vultr.com/docs/how-to-install-gradle-on-ubuntu-16-10

export JAVA_HOME=/home/carlos/Downloads/sdkjava/jdk1.8.0_221

gradle -v
```

Configuración Compilación Windows 10

```javascript
Instalar JDK JAVA
Instalar Android Studio 
config variables entorno 
https://www.youtube.com/watch?v=YVaGbwQephg

C:\Users\xxxx\AppData\Local\Android\Sdk

https://gradle.org/install/

https://bryanlor.com/blog/gradle-tutorial-how-install-gradle-windows

grandle -v

https://www.flipandroid.com/no-se-puede-aceptar-el-acuerdo-de-licencia-android-sdk-platform-24.html

Ir a Android \ sdk \ tools \ bin

entonces corre

sdkmanager --licenses

```







