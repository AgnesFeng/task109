const printInventory = require('../main/main');
//const loadPromotions = require('../main/datbase');
const loadAll= require('../main/datbase');
describe('pos', function () {
    var allItems;

    var inputs;


    beforeEach(function () {
        allItems = loadAll;
        //free = loadPromotions;

        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        printInventory(inputs); //要实现的函数

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';
            //"名称：" + [mingzi] "，数量:" + [num] + [单位名称] + ",单价：" + [danjia] + "(元)，小计："+ [总价]+"(元)\n"
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
