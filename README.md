# [lru](https://github.com/careteenL/lru)
[![](https://img.shields.io/badge/Powered%20by-lru-brightgreen.svg)](https://github.com/careteenL/lru)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/careteenL/lru/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/careteenL/lru.svg?branch=master)](https://travis-ci.org/careteenL/lru)
[![npm](https://img.shields.io/badge/npm-0.1.3-orange.svg)](https://www.npmjs.com/package/@careteen/lru)
[![NPM downloads](http://img.shields.io/npm/dm/@careteen/lru.svg?style=flat-square)](http://www.npmtrends.com/@careteen/lru)

[English Document](./README.en_US.md)

A fast, simple Least Recently Used (LRU) Cache

对 [LRU(最近最少使用)缓存机制](https://leetcode.com/problems/lru-cache/)的简易实现

## 快速使用

NPM
```shell
npm i -D @careteen/lru
```

```js
import LRU from '@careteen/lru'

// Test
let lru = new LRU(2) // Map有序，后面的看做最新添加的
lru.put(1, 1) // Map(1) {1 => 1}
lru.put(2, 2) // Map(2) {1 => 1, 2 => 2}
lru.get(1) // return 1 Map(2) {2 => 2, 1 => 1}
lru.put(3, 3) // Map(2) {1 => 1, 3 => 3}
lru.get(2) // return -1
lru.put(4, 4) // Map(2) {3 => 3, 4 => 4}
lru.get(1) // return -1
lru.get(3) // return 3 Map(2) {4 => 4, 3 => 3}
lru.get(4) // return 4 Map(2) {3 => 3, 4 => 4}
```
更详细使用请查看[API](./doc/api.md)

## 兼容性

IE9+

## 使用文档

- [API](./doc/api.md)

## issue模板

- [Issue Template](./ISSUETEMPLATE.md)

## 贡献者及指南

clone仓库并引入依赖
```shell
git clone git@github.com:careteenL/lru.git
npm install
```
开始开发：）

...

请编写单元测试覆盖所加功能
```shell
npm run test
```
启动本地服务器编写示例
```shell
npm run example
```
修改`package.json README.md CHANGELOG.md`版本号，再发布
```shell
npm run release
```

- [Contributors](https://github.com/careteenL/lru/graphs/contributors)

## 更新日志

- [Changelog](./CHANGELOG.md)

## 计划

- [Todo](./TODO.md)
