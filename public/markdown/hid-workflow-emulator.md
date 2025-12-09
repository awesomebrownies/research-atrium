This is an USB rubber ducky workflow program written in C++ utilizing the Arduino mbed Framework made for a RP2040 MCU. By taking advantage of emulating an hid keyboard device, this small program can execute workflows to speed up work. It is intended to work with Linux as your primary operating system

## Workflows

- 0: Programming:
  - Queries for sub-workflows
  - Opens GitHub Desktop, and Intellij
  - Runs a local repositories status script
- 1: Dual Boot:
  - Stores current operating system, and allows for an easy insert to switch operating systems
  - Temporarily changes efibootmgr settings to one-time reboot to windows
- 2: Circuits:
  - Opens KiCAD, and Visual Studio Code
