package io.github.zekerzhayard.cme_util;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapWithNullKey<K, V> extends ConcurrentHashMap<K, V> {
    public static <K, V> Map<K, V> create() {
        return new ConcurrentHashMapWithNullKey<>();
    }

    private V defaultValue;

    @Override
    public V get(Object key) {
        if (key == null) {
            return this.defaultValue;
        }
        return super.get(key);
    }

    @Override
    public V put(K key, V value) {
        if (key == null) {
            V oldValue = defaultValue;
            defaultValue = value;
            return oldValue;
        }
        return super.put(key, value);
    }
}
