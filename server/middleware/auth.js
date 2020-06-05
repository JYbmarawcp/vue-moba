module.exports = (options) => {
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
    const assert = require('http-assert')

    return async(req, res, next) => { //中间件校验用户是否登录
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请提供jwtoken')
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(token, 401, '无效的jwtoken')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        await next()
    }
}