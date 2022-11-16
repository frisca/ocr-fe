import * as _ from 'lodash';
import * as CryptoJS from 'crypto-js';
import * as Const from '../shared/constant/base.constant';

export const createTree = (arr: any, param: string): any => {
    // console.log('create tree..');
    const nodes = {};
    // console.log('arr createTree : ', arr);

    // tslint:disable-next-line:only-arrow-functions
    return arr.filter(function(obj) {
        // const id = obj['id'], parentId = obj['parentId'];
        // const id = obj['value'], parentId = obj['parentId'];
        // tslint:disable-next-line:one-variable-per-declaration
        const id = obj[param], parentId = obj.parentId;

        nodes[id] = _.defaults(obj, nodes[id], { children: [] });
        // tslint:disable-next-line:no-unused-expression
        parentId && (nodes[parentId] = (nodes[parentId] || { children: [] })).children.push(obj);

        return !parentId;
    });
};

export const levelAndSort = (data: any, startingLevel: number) => {
    // indexes
    const indexed = {};        // the original values
    const nodeIndex = {};      // tree nodes
    let i;
    for (i = 0; i < data.length; i++) {
        const id = data[i].id;
        const xnode = {
            id,
            level: startingLevel,
            children: [],
            sorted: false
        };
        indexed[id] = data[i];
        nodeIndex[id] = xnode;
    }

    // populate tree
    for (i = 0; i < data.length; i++) {
        const node = nodeIndex[data[i].id];
        let pNode = node;
        let j;
        let nextId = indexed[pNode.id].parentId;
        for (j = 0; nextId in nodeIndex; j++) {
            pNode = nodeIndex[nextId];
            if (j === 0) {
                pNode.children.push(node.id);
            }
            node.level++;
            nextId = indexed[pNode.id].parentId;
        }
    }

    // extract nodes and sort-by-level
    const nodes = [];
    // tslint:disable-next-line:forin
    for (const key in nodeIndex) {
        nodes.push(nodeIndex[key]);
    }
    // tslint:disable-next-line:only-arrow-functions
    nodes.sort(function(a, b) {
        return a.level - b.level;
    });

    // refine the sort: group-by-siblings
    const retval = [];
    for (i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const parentId = indexed[node.id].parentId;
        if (parentId in indexed) {
            const pNode = nodeIndex[parentId];
            let j;
            for (j = 0; j < pNode.children.length; j++) {
                const child = nodeIndex[pNode.children[j]];
                if (!child.sorted) {
                    indexed[child.id].level = child.level;
                    retval.push(indexed[child.id]);
                    child.sorted = true;
                }
            }
        } else if (!node.sorted) {
            indexed[node.id].level = node.level;
            retval.push(indexed[node.id]);
            node.sorted = true;
        }
    }
    return retval;
};


export const encrypted = (plainText: string) => {
    const crypkey = CryptoJS.enc.Utf8.parse(Const.DESKEY);

    var encrypted = CryptoJS.AES.encrypt(plainText, crypkey, {
        iv: CryptoJS.enc.Hex.parse('00000000000000000000000000000000'),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      });
      // tslint:disable-next-line:no-var-keyword
    var transitmessage =  '00000000000000000000000000000000' + CryptoJS.enc.Base64.parse(encrypted.toString());
    console.log('hasil encrypt ', transitmessage);
    return 'di coba yah';
};


export const decrypted = (encrypted: string) => {
    console.log('encrypt nya : ', encrypted);
    var encstr = encrypted.substring(32, encrypted.length);
    const cryptkey = CryptoJS.enc.Hex.parse(Const.DESKEY);
    const crypted = CryptoJS.enc.Hex.parse(encstr);


    const crypkey = CryptoJS.enc.Utf8.parse(Const.DESKEY);
    const basecrypted = CryptoJS.enc.Base64.stringify(crypted)
    console.log('ini base64', basecrypted);
    var decrypt = CryptoJS.AES.decrypt(basecrypted, crypkey, {
        iv: CryptoJS.enc.Hex.parse('00000000000000000000000000000000'),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    console.log('ini lhooo ', decrypt.toString(CryptoJS.enc.Utf8));

    // utils.encrypted(decrypt.toString(CryptoJS.enc.Utf8))
    return decrypt.toString(CryptoJS.enc.Utf8);
};
