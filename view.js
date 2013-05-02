#!/usr/bin/env node

var ncurses = require('ncurses')

var win = new ncurses.Window()
win.clear()
win.cursor(40, 20)
win.print('x')
win.refresh()