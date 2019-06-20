module.exports = {

lastSevenDays: 'SELECT *FROM cloud_session.UserInfo WHERE start_time >= NOW() - INTERVAL 10 DAY LIMIT 50;',
uniqueClients: "SELECT start_time FROM cloud_session.UserInfo WHERE start_time >= NOW() - INTERVAL 30 DAY  ORDER BY start_time desc;"

};
