var axios = require('axios')

var id = 'cliendId'
var sec = 'secretId'
var params = '?client_id=' + id + '&client_secret=' + sec

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories')


    return axios.get(encodedURI)
      .then(function (res) {
        return res.data.items
      })
  }
}