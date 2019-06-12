module.exports = {

firstQuery: 'SELECT *FROM cloud_session.UserInfo WHERE start_time >= NOW() - INTERVAL 10 DAY LIMIT 50;'

}
