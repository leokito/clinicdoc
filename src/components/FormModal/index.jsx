import {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import DatePicker from 'react-date-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import moment from 'moment';
import uuid from 'react-uuid';
import {
    FormWrapper,
    Header,
    ListItem,
    ListContainer,
    AddButton,
    Input,
    Label,
    GenderContainer
} from './style';
import { useAppointment } from '../../providers/Appointment';

const AppointmentForm = ({closeModal}) => {
    const [startDateTime, setStartDateTime] = useState(new Date());

    const {createAppointments} = useAppointment()

    const { register, handleSubmit, reset } = useForm();

    const [selectedDate, onChangeDate] = useState(new Date());

    const [selectedTime, onChangeTime] = useState("");

    const onSubmitData = (data) => {
        const { title, name, gender, age, start } = data;
        const formattedDate = moment(selectedDate).format("YYYY-MM-DD")
        const newdate = formattedDate+"T"+start+":00"
        const newdata = {
          title: title,
          name: name,
          gender: gender,
          age: age,
          start: newdate,
        };

        console.log(newdata)

        createAppointments(newdata);
        closeModal();
      };

    return (
        <FormWrapper>
            <Header>Create New Appointment</Header>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <ListContainer>
                    <ListItem>
                        <Label>Titulo</Label>
                        <Input
                            name="title"
                            type="text"
                            placeholder="Consulta de..."
                            required
                            {...register("title", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                    </ListItem>
                    <ListItem>
                        <Label>Nome</Label>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Nome do Paciente"
                            required
                            {...register("name", {
                                required: true,
                                maxLength: 45,
                            })}
                        />
                    </ListItem>
                    <ListItem>
                        <Label>Idade</Label>
                        <Input
                            name="age"
                            type="number"
                            required
                            {...register("age", {
                                required: true,
                                maxLength: 3,
                            })}
                        />
                    </ListItem>
                    <ListItem>
                        <Label>Gênero</Label>
                        <GenderContainer>
                            <Input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                required
                                {...register("gender")}
                            />
                            <Label htmlFor="male">Masc</Label>
                            <Input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                {...register("gender")}
                            />
                            <Label htmlFor="female">Fem</Label>
                            <Input
                                type="radio"
                                id="other"
                                name="gender"
                                value="other"
                                {...register("gender")}
                            />
                            <Label htmlFor="other">Outro</Label>
                        </GenderContainer>
                    </ListItem>
                    <ListItem>
                        <Label>Data</Label>
                            <DatePicker
                                onChange={onChangeDate}
                                value={selectedDate}
                                format="y-MM-d"
                            />
                    </ListItem>
                    <ListItem>
                        <Label>Horário</Label>
                            {/* <TimeRangePicker
                                onChange={onChangeTime}
                                value={selectedTime}
                            /> */}
                            <input type="time" min="07:00" max="18:00" {...register("start")}/>
                    </ListItem>
                    <ListItem>
                        <AddButton type="submit">Marcar Consulta</AddButton>
                    </ListItem>
                </ListContainer>
            </form>
        </FormWrapper>
    );
};

export default AppointmentForm;