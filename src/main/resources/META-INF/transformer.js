var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

function initializeCoreMod() {
    return {
        "Util$11_<init>": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/Util$11",
                "methodName": "<init>",
                "methodDesc": "(Ljava/util/function/BiFunction;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.PUTFIELD && node.owner.equals("net/minecraft/Util$11") && node.name.equals(ASMAPI.mapField("f_214693_")) && node.desc.equals("Ljava/util/Map;")) {
                        mn.instructions.insertBefore(node, new InsnNode(Opcodes.POP));
                        mn.instructions.insertBefore(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/cme_util/ConcurrentHashMapWithNullKey", "create", "()Ljava/util/Map;", false));
                    }
                }
                return mn;
            }
        }
    }
}
