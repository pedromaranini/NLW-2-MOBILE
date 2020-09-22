import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHedaer from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
    return ( 
        <View style={styles.container}>
            <PageHedaer title="Proffys disponíveis">
                <Text>asasasa</Text>
            </PageHedaer>


            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>
    );
}

export default TeacherList;