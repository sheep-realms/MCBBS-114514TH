function md5(str) {
    function toHexString(num) {
        var hexString = "";
        for (var i = 0; i < 4; i++) {
            var hexDigit = (num >> (i * 8)) & 0xff;
            hexString += (hexDigit < 0x10 ? "0" : "") + hexDigit.toString(16);
        }
        return hexString;
    }

    function leftShift(num, bits) {
        return (num << bits) | (num >>> (32 - bits));
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return x ^ y ^ z;
    }

    function I(x, y, z) {
        return y ^ (x | (~z));
    }

    var T = [];
    for (var i = 1; i <= 64; i++) {
        T[i] = Math.floor(Math.pow(2, 32) * Math.abs(Math.sin(i)));
    }

    var A = 0x67452301,
        B = 0xefcdab89,
        C = 0x98badcfe,
        D = 0x10325476;

    var bitLen = str.length * 8;
    str += String.fromCharCode(0x80);
    while ((str.length * 8) % 512 != 448) {
        str += String.fromCharCode(0);
    }
    str += String.fromCharCode(bitLen & 0xff);
    str += String.fromCharCode((bitLen >>> 8) & 0xff);
    str += String.fromCharCode((bitLen >>> 16) & 0xff);
    str += String.fromCharCode((bitLen >>> 24) & 0xff);
    str += String.fromCharCode(0);
    str += String.fromCharCode(0);
    str += String.fromCharCode(0);
    str += String.fromCharCode(0);

    for (var i = 0; i < str.length; i += 64) {
        var block = str.substring(i, i + 64);
        var M = [];
        for (var j = 0; j < 16; j++) {
            M[j] = block.charCodeAt(j * 4) |
                (block.charCodeAt(j * 4 + 1) << 8) |
                (block.charCodeAt(j * 4 + 2) << 16) |
                (block.charCodeAt(j * 4 + 3) << 24);
        }

        var AA = A,
            BB = B,
            CC = C,
            DD = D;

        for (var j = 1; j <= 64; j++) {
            var F_val, g;
            if (j <= 16) {
                F_val = F(BB, CC, DD);
                g = j - 1;
            } else if (j <= 32) {
                F_val = G(BB, CC, DD);
                g = (5 * j - 4) % 16;
            } else if (j <= 48) {
                F_val = H(BB, CC, DD);
                g = (3 * j + 2) % 16;
            } else {
                F_val = I(BB, CC, DD);
                g = (7 * j - 7) % 16;
            }
            var D_tmp = DD;
            DD = CC;
            CC = BB;
            BB = BB + leftShift((AA + F_val + M[g] + T[j]), [7, 12, 17, 22][Math.floor((j - 1) / 16) % 4]);
            AA = D_tmp;
        }
        A = (A + AA) >>> 0;
        B = (B + BB) >>> 0;
        C = (C + CC) >>> 0;
        D = (D + DD) >>> 0;
    }

    var digest = toHexString(A) + toHexString(B) + toHexString(C) + toHexString(D);
    return digest.toLowerCase();
}