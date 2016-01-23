'use strict';/** * @ngdoc service * @name saApp.ticket * @description * # ticket * Factory in the saApp. */angular.module('saApp')  .factory('ticket', function ($resource, zidong, shoudong) {   var list = zidong + "tc/type/adminList";   var create = shoudong + "tc/ticketTypeService/create";   var info = zidong + "tc/type/adminInfo";   var edit = zidong + "tc/type/edit";   var start = zidong + "tc/type/adminStart";   var stop = zidong + "tc/type/adminStop";   return {        list : function(){            return $resource(list, {}, {});        },        create : function(){            return $resource(create, {}, {});        },        edit : function(){            return $resource(edit, {}, {});        },        info : function(){            return $resource(info, {}, {});        },        start : function(){            return $resource(start, {}, {});        },        stop : function(){            return $resource(stop, {}, {});        }   };});